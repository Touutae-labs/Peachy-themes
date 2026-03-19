import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [
  "package.json",
  "packages/tokens/package.json",
  "packages/tokens/peachy.tokens.json",
  "packages/vscode-theme/package.json",
  "packages/vscode-theme/themes/Peachy Themes-color-theme.json",
  "packages/vscode-theme/examples/peachy-language-settings.json",
  "packages/oh-my-posh/peachy.omp.json"
];

for (const relative of files) {
  const absolute = path.join(root, relative);
  JSON.parse(fs.readFileSync(absolute, "utf8"));
  console.log(`validated ${relative}`);
}
