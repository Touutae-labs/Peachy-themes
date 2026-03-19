# Change Log

All notable changes to the "peachy-themes" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.2.0] — 2026-03-19

### Added

- **Peachy Themes - Peach**: a new softer variant built from the Peachy design token system, with 210 UI colors, semantic highlighting, and expanded language coverage for TypeScript, Python, Rust, Go, Shell, and more.
- Both variants now ship in a single extension — pick your favorite from the VS Code Color Theme picker.
- **LazyVim**: Pink and Peach variants with `require("peachy").setup({ variant = "pink" })`.
- **WezTerm**: `pink.lua` and `peach.lua` terminal palettes with matching ANSI colors and tab bar.
- **Oh My Posh**: `pink.omp.json` and `peach.omp.json` prompt themes with variant-matched accents.

### Changed

- The original theme is now named **Peachy Themes - Pink** so it can coexist with the Peach variant.
- All packages now ship with Pink and Peach variants for a consistent experience across the entire dev setup.
- Existing users: your active theme will continue to work. Open the Color Theme picker and select "Peachy Themes - Pink" if VS Code doesn't match it automatically.

## [0.0.2] — 2023

- Initial public release of the Pink theme on the VS Code Marketplace.
