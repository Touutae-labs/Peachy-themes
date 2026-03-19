# Peachy WezTerm

Terminal color scheme for WezTerm with two variants.

## Variants

- **peach.lua** — the softer, token-based palette with peach accents and cream highlights
- **pink.lua** — the original vibrant palette with hot pink accents, golden brights, and lavender tones

## Usage

Copy the variant you want into your WezTerm config:

```bash
# For the Peach variant
cp packages/wezterm/peach.lua ~/.config/wezterm/peachy.lua

# Or for the Pink variant
cp packages/wezterm/pink.lua ~/.config/wezterm/peachy.lua
```

Then in your `wezterm.lua`:

```lua
local peachy = dofile(
  os.getenv("HOME") .. "/.config/wezterm/peachy.lua"
)

return {
  colors = peachy,
}
```

## What's covered

- Foreground, background, cursor, and selection colors
- 8 standard + 8 bright ANSI colors
- Indexed colors for accent tones
- Tab bar colors (active, inactive, hover)
- Copy mode and quick select mode highlights

## Links

- [Peachy Collection website](https://peachytheme.party)
- [VS Code theme](../vscode-theme/)
