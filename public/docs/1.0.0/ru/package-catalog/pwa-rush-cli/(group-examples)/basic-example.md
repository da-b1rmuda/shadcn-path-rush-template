# Basic Example

This example uses the CLI surface of [runInit](../api/functions/run-init.md) with the default setup model and skips dependency installation so that the example stays inside the confirmed repository state.

## Command

```bash
npx @da_b1rmuda/pwa-rush-cli init --yes --skip-install
```

## What this does

With default answers, the command:

- keeps `setupMode` at `quick`
- derives the app name from the target `package.json.name`
- writes the default manifest fields
- writes the default icon set
- generates all three demo UI elements

## Confirmed output files

The default path configuration produces:

- `public/manifest.webmanifest`
- `public/pwa/icon-192.png`
- `public/pwa/icon-512.png`
- `public/pwa/maskable-512.png`
- `public/pwa/apple-touch-icon.png`
- a patched `vite.config.*`
- a patched `src/main.tsx` or `src/main.jsx`
- `src/pwa/PWAExample.tsx` or `src/pwa/PWAExample.jsx`

## Confirmed manifest shape

The generated manifest contains these fixed fields in addition to the app-derived values:

```json
{
  "display": "standalone",
  "start_url": "/",
  "scope": "/"
}
```

It also includes these icon entries:

- `/pwa/icon-192.png`
- `/pwa/icon-512.png`
- `/pwa/maskable-512.png`
- `/pwa/apple-touch-icon.png`

## Repository note

This example was smoke-tested on April 14, 2026 with a copied `template/existing-react-vite` project and the built CLI. Because the repository contains runtime package-name conflicts, `--skip-install` is used here to avoid asserting an unconfirmed dependency setup.
