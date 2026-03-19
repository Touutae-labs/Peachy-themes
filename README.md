# Peachy Collection

<p align="center">
  <img src="apps/site/assets/peachy-logo.svg" alt="Peachy Collection" width="420">
</p>

<p align="center">
  Soft themes for the whole dev setup.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes">
    <img alt="VS Code Marketplace version" src="https://img.shields.io/visual-studio-marketplace/v/Piros-k.peachy-themes?style=for-the-badge&label=marketplace&color=ff928b">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes">
    <img alt="VS Code Marketplace installs" src="https://img.shields.io/visual-studio-marketplace/i/Piros-k.peachy-themes?style=for-the-badge&label=installs&color=cdeac0">
  </a>
  <a href="https://github.com/Touutae-labs/Peachy-themes/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Touutae-labs/Peachy-themes?style=for-the-badge&logo=github&color=fec3d6">
  </a>
  <a href="https://github.com/Touutae-labs/Peachy-themes/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Touutae-labs/Peachy-themes?style=for-the-badge&logo=github&color=ffac81">
  </a>
  <a href="https://github.com/Touutae-labs/Peachy-themes/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Touutae-labs/Peachy-themes?style=for-the-badge&logo=github&color=efe9ae">
  </a>
</p>

Peachy Collection grows the original **Peachy Themes** VS Code extension into a fuller theme family for editors, prompts, terminals, docs, and shared design tokens. It keeps the soft candy-like mood, but gives the project a cleaner structure so the palette can evolve consistently across multiple tools.

![Peachy Themes screenshot](https://user-images.githubusercontent.com/58826535/169280008-c2c4516e-9b3f-435a-9f33-42d2ded91236.png)

## Achievements

Snapshot as of March 19, 2026:

- Live on the VS Code Marketplace as `Piros-k.peachy-themes`
- `4` GitHub stars
- `0` GitHub forks
- `0` open issues
- `9` public commits
- Docs landing page, dedicated docs page, palette page, and playground are all in-repo
- Shared token and generator pipeline now feeds the docs surfaces and theme assets

## What’s In This Repo

| Path | Purpose |
| --- | --- |
| `packages/vscode-theme` | Flagship VS Code extension package |
| `packages/tokens` | Source-of-truth Peachy colors and semantic roles |
| `packages/generator` | Builds shared CSS and JSON assets from tokens |
| `packages/lazyvim` | Peachy colorscheme for Neovim and LazyVim |
| `packages/oh-my-posh` | Matching prompt theme |
| `packages/wezterm` | Matching terminal palette |
| `apps/site` | Documentation and showcase website |
| `apps/playground` | Visual QA page for syntax and palette review |
| `scripts` | Validation helpers such as color and JSON checks |

## Documentation

- Docs hub: [docs/README.md](./docs/README.md)
- Publishing guide: [docs/publishing.md](./docs/publishing.md)
- Repo structure: [docs/repo-structure.md](./docs/repo-structure.md)
- Brand guide: [docs/brand.md](./docs/brand.md)
- Site home: [apps/site/index.html](./apps/site/index.html)
- Site docs page: [apps/site/docs.html](./apps/site/docs.html)
- Palette page: [apps/site/palette.html](./apps/site/palette.html)
- Playground: [apps/playground/index.html](./apps/playground/index.html)

## Install

### VS Code

- Marketplace: [Peachy Themes](https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes&ssr=false#overview)
- Quick Open: `ext install Piros-k.peachy-themes`

### Other Ports

- `LazyVim`: currently distributed from this collection repo and a good candidate for a future dedicated `peachy.nvim` repo or export branch
- `Oh My Posh`: use the packaged JSON theme file
- `WezTerm`: use the packaged Lua palette file

## Development

Run the generator and validation loop:

```bash
npm run generate
npm run check
```

This:

- regenerates shared assets from tokens
- validates important JSON files
- runs the Peachy color audit for contrast sanity checks

## Release Flow

Push changes to the original repo:

```bash
git add -A
git commit -m "Refresh Peachy collection"
git push origin main
```

Create a release:

```bash
git tag v0.1.0
git push origin main --tags
```

What happens next:

- pushes to `main` trigger the Pages deploy workflow
- tags trigger packaged release assets for the collection
- the VS Code extension can publish automatically when `VSCE_PAT` exists and the publisher account is available

## Project Goals

- Keep the original Peachy identity
- Make colors reusable across tools
- Improve accessibility and contrast with repeatable checks
- Grow from one theme listing into a small, recognizable ecosystem

## Credits

- Original inspiration: [PinkCatBoo](https://github.com/ftsamoyed/PinkCatBoo)
- Current project: [Touutae Labs](https://github.com/Touutae-labs)
