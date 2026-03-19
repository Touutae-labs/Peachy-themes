# Peachy Oh My Posh

Shell prompt theme for Oh My Posh with two variants.

## Variants

- **peach.omp.json** — softer peach session, cream git, mint Node.js segments
- **pink.omp.json** — vibrant hot pink session, golden git, lavender Node.js segments

## Segments

Both variants include:

- **Session** — username on accent background
- **Path** — current directory with folder icon
- **Git** — branch name with dirty state indicator
- **Node** — Node.js version
- **Execution time** — right-aligned
- **Exit status** — right-aligned, rose on error

## Usage

```bash
# For the Peach variant
cp packages/oh-my-posh/peach.omp.json ~/.config/

# Or for the Pink variant
cp packages/oh-my-posh/pink.omp.json ~/.config/

# Add to your shell profile (.bashrc, .zshrc, etc.)
eval "$(oh-my-posh init zsh --config ~/.config/peach.omp.json)"
```

## Links

- [Peachy Collection website](https://peachytheme.party)
- [VS Code theme](../vscode-theme/)
