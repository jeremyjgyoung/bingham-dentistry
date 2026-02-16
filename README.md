# Bingham Dentistry (Astro)

A modern rebuild of the Elizabeth Bingham Dentistry website using:

- **Astro** v5 (upgrade to v6 when stable with `pnpm add astro@next`)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Svelte v5**
- **Bits UI v2** (FAQ accordion)
- **pnpm**

## Setup

```bash
pnpm install
```

## Images

All photos and assets have been copied from `elizabeth-bingham-dentistry-main/public/images/` into this project’s `public/images/`. If you add or replace images, keep the same folder structure so links stay correct.

## Environment

For the contact form mail API, set:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

## Commands

| Command       | Action         |
| ------------- | -------------- |
| `pnpm dev`    | Start dev server |
| `pnpm build`  | Build for production (static + server API) |
| `pnpm preview` | Preview production build |

## Upgrading to Astro v6

When Astro 6 is released:

```bash
pnpm add astro@^6
```

## License

Private.
