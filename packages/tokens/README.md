# Peachy Tokens

This package is the source of truth for the Peachy Collection palette.

Everything that can be generated from shared colors should start here:

- website palette assets
- preview playground assets
- CSS variables
- JSON exports for tooling

Keep manual theme files expressive, but keep the palette itself centralized.

## Edit flow

1. Change `peachy.tokens.json`.
2. Run `npm run generate`.
3. Run `npm run check`.
4. Review the site and playground before shipping.

## Related docs

- [Repo structure](../../docs/repo-structure.md)
- [Publishing guide](../../docs/publishing.md)
