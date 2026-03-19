# Peachy for LazyVim

This package is a more complete Peachy colorscheme for Neovim and LazyVim.

It mirrors the same core palette used by the VS Code theme so the collection can feel related across editors.

Included highlight coverage now includes:

- core editor UI groups
- diagnostics and diff colors
- popup menu and tabline colors
- Tree-sitter groups for tags, functions, types, strings, numbers, and parameters

## Usage

This repo keeps the Neovim theme in-package for now. If you want a one-line `lazy.nvim` install, the cleanest path is to split this package into its own repo later or export it to a root-level plugin repository.

For local development, use the Lua module in this package as the source of truth and copy or adapt it into your Neovim config.

## Related docs

- [Repo structure](../../docs/repo-structure.md)
- [Brand guide](../../docs/brand.md)
