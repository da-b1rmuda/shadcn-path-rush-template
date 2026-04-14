# Quick Start

This page documents the shortest confirmed execution path for [runInit](./api/functions/run-init.md). Because the current repository snapshot contains unresolved package-name conflicts, this quick start intentionally focuses on the confirmed initialization call and the resulting file changes.

## Minimal programmatic path

1. Install the CLI package:

```bash
npm install --save-dev @da_b1rmuda/pwa-rush-cli
```

2. Import and call [runInit](./api/functions/run-init.md):

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({
  cwd: './path-to-your-react-vite-app',
  yes: true,
  skipInstall: true,
})
```

3. Inspect the target project after the call completes.

## Expected result

With the default setup model, the target project receives these changes:

- `public/manifest.webmanifest`
- `public/pwa/icon-192.png`
- `public/pwa/icon-512.png`
- `public/pwa/maskable-512.png`
- `public/pwa/apple-touch-icon.png`
- a patched `vite.config.*`
- a patched `src/main.tsx` or `src/main.jsx`
- `src/pwa/PWAExample.tsx` or `src/pwa/PWAExample.jsx`
- `src/vite-env.d.ts` for TypeScript targets

## CLI equivalent

```bash
npx @da_b1rmuda/pwa-rush-cli init --yes --skip-install
```

## Why `--skip-install` is used here

The repository currently disagrees on the runtime package name. Using `skipInstall` keeps this quick start focused on the confirmed behavior of [runInit](./api/functions/run-init.md) itself: file generation, AST patching, and project detection.

## Next pages

- Read [configuration](./configuration.md) to understand the full setup model.
- Read [basic usage](./guides/basic-usage.md) for the complete execution flow.
- Read [troubleshooting](./guides/troubleshooting.md) before relying on the default dependency names in this repository snapshot.
