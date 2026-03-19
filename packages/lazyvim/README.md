# Peachy for LazyVim / Neovim

A Peachy colorscheme for Neovim with two variants that mirror the VS Code extension.

## Variants

- **Peach** — the softer, token-based palette with calm peach strings, cream functions, and mint keywords
- **Pink** — the original vibrant palette with hot pink keywords, golden functions, lavender types, and warm cream strings

## Usage

Copy the Lua module into your Neovim config:

```bash
cp -r packages/lazyvim/lua/peachy ~/.config/nvim/lua/
```

Then in your `init.lua` or LazyVim config:

```lua
-- Load the Peach variant (default)
require("peachy").setup()

-- Or load the Pink variant
require("peachy").setup({ variant = "pink" })
```

## What's covered

- Core editor UI: Normal, Float, Cursor, Search, Visual, StatusLine, TabLine
- Full Treesitter scopes: @property, @tag, @function, @keyword, @string, @number, @type
- LSP diagnostics: Error, Warn, Info, Hint (with virtual text)
- Git signs and diff colors
- Popup menu (Pmenu) and completion

## Links

- [Peachy Collection website](https://peachytheme.party)
- [VS Code theme](../vscode-theme/)
