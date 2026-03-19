import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checkMode = process.argv.includes("--check");
const tokensPath = path.join(root, "packages", "tokens", "peachy.tokens.json");
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

const getColor = (name) => {
  const value = tokens.colors[name];
  if (!value) {
    throw new Error(`Missing token color: ${name}`);
  }
  return value;
};

const cssVars = {
  bg: getColor("base.950"),
  panel: getColor("base.900"),
  "panel-2": getColor("base.800"),
  "panel-3": getColor("base.600"),
  text: getColor("text.primary"),
  muted: getColor("text.soft"),
  "muted-2": getColor("text.muted"),
  peach: getColor("peach.500"),
  rose: getColor("peach.400"),
  soft: getColor("peach.300"),
  melon: getColor("melon.400"),
  cream: getColor("cream.300"),
  mint: getColor("mint.300"),
  comment: getColor("mint.500"),
  danger: getColor("rose.500"),
  success: getColor("success.500"),
  cyan: getColor("cyan.300")
};

const paletteList = [
  ["Base 950", getColor("base.950")],
  ["Base 900", getColor("base.900")],
  ["Base 800", getColor("base.800")],
  ["Peach 500", getColor("peach.500")],
  ["Rose 500", getColor("peach.400")],
  ["Soft Pink", getColor("peach.300")],
  ["Cream", getColor("cream.300")],
  ["Mint", getColor("mint.300")],
  ["Comment Green", getColor("mint.500")],
  ["Melon", getColor("melon.400")],
  ["Danger", getColor("rose.500")],
  ["Success", getColor("success.500")]
];

const distJson = JSON.stringify(tokens, null, 2) + "\n";
const distCss = [
  ":root {",
  ...Object.entries(cssVars).map(([name, value]) => `  --${name}: ${value};`),
  "}"
].join("\n") + "\n";
const paletteJs = `window.PEACHY_PALETTE = ${JSON.stringify({
  name: tokens.name,
  version: tokens.version,
  colors: tokens.colors,
  paletteList
}, null, 2)};\n`;

const outputs = new Map([
  [path.join(root, "packages", "tokens", "dist", "peachy.json"), distJson],
  [path.join(root, "packages", "tokens", "dist", "peachy.css"), distCss],
  [path.join(root, "apps", "site", "generated", "tokens.css"), distCss],
  [path.join(root, "apps", "site", "generated", "palette.js"), paletteJs],
  [path.join(root, "apps", "playground", "generated", "tokens.css"), distCss],
  [path.join(root, "apps", "playground", "generated", "palette.js"), paletteJs]
]);

let hasDiff = false;

for (const [filePath, contents] of outputs) {
  const exists = fs.existsSync(filePath);
  const current = exists ? fs.readFileSync(filePath, "utf8") : null;
  if (checkMode) {
    if (current !== contents) {
      hasDiff = true;
      console.error(`Generated file is out of date: ${path.relative(root, filePath)}`);
    }
    continue;
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
  console.log(`wrote ${path.relative(root, filePath)}`);
}

if (checkMode && hasDiff) {
  process.exitCode = 1;
} else if (checkMode) {
  console.log("generated assets are up to date");
}
