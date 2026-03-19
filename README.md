# Peachy Collection

Peachy Collection turns the original **Peachy Themes** VS Code extension into a small theme family that can grow across editors, terminals, prompts, and the web.

It keeps the soft, candy-like Peachy look, but gives the project a better structure so the palette can be reused consistently and improved over time.

![Peachy Themes screenshot](https://user-images.githubusercontent.com/58826535/169280008-c2c4516e-9b3f-435a-9f33-42d2ded91236.png)

## What is included

- `packages/vscode-theme`: the original VS Code theme, cleaned up and ready to evolve
- `packages/tokens`: the source-of-truth Peachy design tokens
- `packages/generator`: scripts that generate shared assets from tokens
- `packages/lazyvim`: a fuller Peachy colorscheme for Neovim and LazyVim
- `packages/oh-my-posh`: a more complete Peachy-flavored prompt theme
- `packages/wezterm`: a matching terminal palette
- `apps/site`: a lightweight showcase website for the collection
- `apps/playground`: a syntax preview lab for fast color iteration
- `scripts/color-audit.mjs`: a contrast and palette consistency checker

## Project goals

- Keep the original Peachy identity
- Make colors reusable across tools
- Improve accessibility and contrast with repeatable checks
- Prepare the collection for multiple repos or publishable packages later

## Existing VS Code extension

- Marketplace: [Peachy Themes](https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes&ssr=false#overview)
- Original inspiration: [PinkCatBoo](https://github.com/ftsamoyed/PinkCatBoo)

## Workspace layout

```text
apps/
  playground/
  site/
packages/
  generator/
  lazyvim/
  oh-my-posh/
  tokens/
  wezterm/
  vscode-theme/
scripts/
  color-audit.mjs
```

## Iterate on colors

Run:

```bash
npm run generate
npm run check
```

This regenerates shared assets, validates JSON theme files, and reports contrast ratios so you can refine the theme with feedback instead of tweaking blindly.

## Next ideas

- Add more Peachy variants such as `latte`, `sunset`, or `night`
- Export terminal palettes for Ghostty, iTerm2, Warp, and WezTerm
- Publish the website with install docs and live previews
- Add snapshot-based preview images for every port
