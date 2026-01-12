# Obsidian CSS variables (notes for this template)

This template styles its UI using **Obsidian theme CSS variables** (instead of hard-coded colors) so it adapts to user themes.

Source reference:

- Obsidian docs: CSS variables index and foundations like Colors

## Usage pattern

Use Tailwind for layout/spacing/typography, and reference Obsidian variables directly for colors:

- `text-[color:var(--text-normal)]`
- `bg-[color:var(--background-primary)]`
- `border-[color:var(--background-modifier-border)]`
- `hover:bg-[color:var(--background-modifier-hover)]`
- `bg-[color:var(--interactive-accent)]`
