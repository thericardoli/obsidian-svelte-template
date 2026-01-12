# Obsidian CSS variables (notes for this template)

This template styles its UI using **Obsidian theme CSS variables** (instead of hard-coded colors) so it adapts to user themes.

Source reference:

- Obsidian docs: CSS variables index and foundations like Colors

## Template variable map

The plugin defines a small, stable set of template-scoped variables on `.obsidian-svelte-template` in `src/styles.css`. These map to Obsidian variables:

- `--ost-surface-1` → `--background-primary`
- `--ost-surface-2` → `--background-secondary`
- `--ost-modal-bg` → `--modal-background` (fallback: `--background-primary`)
- `--ost-border` → `--modal-border-color` (fallback: `--background-modifier-border`)
- `--ost-border-focus` → `--background-modifier-border-focus`
- `--ost-text` → `--text-normal`
- `--ost-muted` → `--text-muted`
- `--ost-faint` → `--text-faint`
- `--ost-hover` → `--background-modifier-hover`
- `--ost-active-hover` → `--background-modifier-active-hover`
- `--ost-accent` → `--interactive-accent`
- `--ost-accent-hover` → `--interactive-accent-hover`
- `--ost-on-accent` → `--text-on-accent`
- `--ost-radius` → `--modal-radius` (fallback: `12px`)

## Usage pattern

Use Tailwind for layout/spacing/typography, and reference variables for colors:

- `text-[color:var(--ost-text)]`
- `bg-[color:var(--ost-surface-1)]`
- `border-[color:var(--ost-border)]`
- `hover:bg-[color:var(--ost-hover)]`
- `bg-[color:var(--ost-accent)]`
