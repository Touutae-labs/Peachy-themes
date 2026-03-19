#!/usr/bin/env node
/**
 * Peachy Collection — release helper
 *
 * Usage:
 *   node scripts/release.mjs patch    # 0.2.1 → 0.2.2
 *   node scripts/release.mjs minor    # 0.2.1 → 0.3.0
 *   node scripts/release.mjs major    # 0.2.1 → 1.0.0
 *
 * What it does:
 *   1. Bumps version in both package.json files (root + vscode-theme)
 *   2. Runs `npm run check` to validate everything
 *   3. Commits the version bump
 *   4. Creates a git tag (v0.x.x)
 *   5. Pushes commit + tag to origin
 *
 * The tag push triggers the release workflow which publishes to
 * the VS Code Marketplace and creates a GitHub Release.
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const bump = process.argv[2];

if (!["patch", "minor", "major"].includes(bump)) {
  console.error("Usage: node scripts/release.mjs <patch|minor|major>");
  console.error("");
  console.error("  patch  — bug fixes, small tweaks");
  console.error("  minor  — new features, new variants");
  console.error("  major  — breaking changes");
  process.exit(1);
}

const run = (cmd) => {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: root });
};

// --- Read current version from root package.json ---
const rootPkg = path.join(root, "package.json");
const vscodePkg = path.join(root, "packages", "vscode-theme", "package.json");

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const writeJson = (p, data) => fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");

const rootData = readJson(rootPkg);
const vscodeData = readJson(vscodePkg);

const current = rootData.version;
const [maj, min, pat] = current.split(".").map(Number);

let next;
if (bump === "patch") next = `${maj}.${min}.${pat + 1}`;
else if (bump === "minor") next = `${maj}.${min + 1}.0`;
else next = `${maj + 1}.0.0`;

console.log(`\nPeachy Collection release`);
console.log(`  current : ${current}`);
console.log(`  bump    : ${bump}`);
console.log(`  next    : ${next}`);
console.log(`  tag     : v${next}`);

// --- Check for clean working tree ---
try {
  execSync("git diff --quiet && git diff --cached --quiet", { cwd: root });
} catch {
  console.error("\nError: working tree is not clean. Commit or stash changes first.");
  process.exit(1);
}

// --- Bump versions ---
rootData.version = next;
vscodeData.version = next;
writeJson(rootPkg, rootData);
writeJson(vscodePkg, vscodeData);
console.log(`\nBumped package.json → ${next}`);
console.log(`Bumped packages/vscode-theme/package.json → ${next}`);

// --- Validate ---
console.log("\nRunning validation...");
try {
  run("npm run check");
} catch {
  // Revert on failure
  rootData.version = current;
  vscodeData.version = current;
  writeJson(rootPkg, rootData);
  writeJson(vscodePkg, vscodeData);
  console.error("\nValidation failed — version bump reverted.");
  process.exit(1);
}

// --- Commit, tag, push ---
run(`git add package.json packages/vscode-theme/package.json`);
run(`git commit -m "release: v${next}"`);
run(`git tag v${next}`);
run(`git push origin main`);
run(`git push origin v${next}`);

console.log(`\n🍑 Released v${next}!`);
console.log(`   Watch the workflow: https://github.com/Touutae-labs/Peachy-themes/actions`);
