# Peachy Generator

The generator builds shared assets from the token package.

Current outputs:

- `packages/tokens/dist/peachy.json`
- `packages/tokens/dist/peachy.css`
- `apps/site/generated/tokens.css`
- `apps/site/generated/palette.js`
- `apps/playground/generated/tokens.css`
- `apps/playground/generated/palette.js`

## Commands

```bash
npm run generate
npm run generate:check
```

## Responsibilities

- keep generated palette data consistent across docs and previews
- avoid hand-copying color tokens into multiple apps
- give the site and playground a single data source

## Input source

The generator reads from `packages/tokens/peachy.tokens.json`.
