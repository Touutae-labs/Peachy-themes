# Peachy Language Support

## Syntax direction

Peachy uses a stable set of roles across languages:

- comments: muted leaf green
- strings: warm peach
- numbers and escapes: melon orange
- keywords and storage: mint
- functions and methods: soft cream
- types, classes, and interfaces: powdered pink
- properties and object keys: light rose
- operators and punctuation: blush text

## Language coverage

### JavaScript and TypeScript

- decorators and modifiers use warm melon
- functions and methods use cream
- types, interfaces, and classes use pink
- template literals keep peach strings with lighter interpolation punctuation

### React and JSX/TSX

- component tags use rose accents
- props and attributes use melon
- embedded expressions inherit the standard Peachy syntax roles

### JSON and YAML

- keys use light rose for quick scanning
- values keep the shared string, number, and boolean colors

### Markdown

- headings use cream
- inline code and links use melon
- emphasis uses soft pink

### Python

- builtins and common callable helpers use cream
- special language variables receive peachy emphasis

### Shell

- commands and builtins lean mint
- variables and flags stay readable against the dark base

### Rust and Go

- Rust macros and lifetimes use melon
- Go packages and constants use light rose

## Iteration loop

After changing colors, run:

```bash
node scripts/color-audit.mjs
```

Then compare the theme in at least one code-heavy file and one content-heavy file such as Markdown or JSON.
