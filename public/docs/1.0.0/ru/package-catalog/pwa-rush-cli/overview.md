# Overview

`@da_b1rmuda/pwa-rush-cli` exists to add PWA wiring to an already existing React + Vite application. The implementation is centered on a single workflow exposed through the CLI and through [runInit](./api/functions/run-init.md).

## Confirmed capabilities

- detects whether the target directory is an existing React + Vite project
- optionally installs a runtime package and `vite-plugin-pwa`
- generates `manifest.webmanifest`
- generates four PNG icons in `<publicDir>/pwa/`
- injects `VitePWA(...)` into `vite.config.*`
- injects `PWAProvider` and `registerSW(...)` into the React entry file
- generates an optional `PWAExample` component when UI features are enabled
- adds `/// <reference types="vite-plugin-pwa/client" />` to `src/vite-env.d.ts` for TypeScript targets

## Package type

This package is both:

- a CLI package with `./dist/index.js` as the binary entry point
- an ESM package with one public export, [runInit](./api/functions/run-init.md)

## Supported target-project shape

The detection logic confirms support only for projects that meet all of these conditions:

- `package.json` exists in the target root
- `react`, `react-dom`, and `vite` are present in `dependencies` or `devDependencies`
- one of these Vite config files exists:
  - `vite.config.ts`
  - `vite.config.js`
  - `vite.config.mts`
  - `vite.config.mjs`
  - `vite.config.cts`
  - `vite.config.cjs`
- one of these entry files exists:
  - `src/main.tsx`
  - `src/main.jsx`

No support is confirmed for non-React projects, non-Vite projects, or projects whose entry file lives outside those two paths.

## Confirmed entry points

### CLI

If no command name is supplied, the CLI defaults to `init`. Any command other than `init` prints help and exits with status code `1`.

### Programmatic API

The only confirmed public function is [runInit](./api/functions/run-init.md).

## Confirmed outputs

Depending on configuration, the package writes or updates the following files in the target project:

- `<publicDir>/manifest.webmanifest`
- `<publicDir>/pwa/icon-192.png`
- `<publicDir>/pwa/icon-512.png`
- `<publicDir>/pwa/maskable-512.png`
- `<publicDir>/pwa/apple-touch-icon.png`
- `vite.config.*`
- `src/main.tsx` or `src/main.jsx`
- `src/pwa/PWAExample.tsx` or `src/pwa/PWAExample.jsx` when UI is enabled and at least one UI element is selected
- `src/vite-env.d.ts` when the detected entry file is `src/main.tsx`

## Limitations and conflicts

Two repository conflicts materially affect documentation accuracy:

- the CLI package name printed by help text does not match `package.json.name`
- the generated runtime import name does not match the sibling runtime package name in this repository

Those issues do not change the confirmed code paths, but they block a fully repository-consistent install story. See [troubleshooting](./guides/troubleshooting.md).
