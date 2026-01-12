# Obsidian CSS variables (adapter layer)

This template keeps Tailwind for layout/spacing but uses **Obsidian theme CSS variables** for all colors, borders, and key UI tokens.

Source reference:

- Obsidian docs: CSS variables index and foundations like Colors

## Adapter layer

`src/styles.css` defines a scoped alias layer on `.obsidian-svelte-template`.

- All `--ui-*` variables map directly to Obsidian variables.
- Components can then use `var(--ui-...)` instead of repeating Obsidian var names.

## Usage pattern

Use Tailwind for layout/spacing/typography, and `var(--ui-...)` for theme tokens:

- `text-[color:var(--ui-text)]`
- `bg-[color:var(--ui-bg)]`
- `border-[color:var(--ui-border)]`
- `hover:bg-[color:var(--ui-hover)]`
- `bg-[color:var(--ui-accent)] text-[color:var(--ui-on-accent)]`
