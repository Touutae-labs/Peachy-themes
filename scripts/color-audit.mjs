import fs from "node:fs";
import path from "node:path";

const workspace = process.cwd();
const palettePath = path.join(workspace, "packages", "tokens", "peachy.tokens.json");

const palette = JSON.parse(fs.readFileSync(palettePath, "utf8"));
const colors = palette.colors;

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = clean.length === 3
    ? clean.split("").map((part) => part + part).join("")
    : clean;
  const number = Number.parseInt(value, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255
  };
}

function toLinear(channel) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

const checks = [
  ["text.primary on base.950", colors["text.primary"], colors["base.950"]],
  ["text.soft on base.900", colors["text.soft"], colors["base.900"]],
  ["peach.500 on base.950", colors["peach.500"], colors["base.950"]],
  ["mint.300 on base.950", colors["mint.300"], colors["base.950"]],
  ["cream.300 on base.950", colors["cream.300"], colors["base.950"]],
  ["rose.500 on base.950", colors["rose.500"], colors["base.950"]],
  ["comment green on base.950", colors["mint.500"], colors["base.950"]]
];

console.log("Peachy color audit");
console.log("==================");

for (const [label, fg, bg] of checks) {
  const score = Number(contrast(fg, bg));
  const verdict = score >= 4.5 ? "pass" : score >= 3 ? "review" : "fail";
  console.log(`${label}: ${score}:1 (${verdict})`);
}
