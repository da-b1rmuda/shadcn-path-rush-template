# Installation

## Prerequisites

Confirmed prerequisites from `package.json` and the project-detection code:

- Node.js `>=18`
- an existing React + Vite project
- a target `package.json` containing `react`, `react-dom`, and `vite`
- one supported Vite config file
- one supported entry file: `src/main.tsx` or `src/main.jsx`

## Install the CLI package

The package metadata identifies the package as `@da_b1rmuda/pwa-rush-cli`.

### npm

```bash
npm install --save-dev @da_b1rmuda/pwa-rush-cli
```

### pnpm

```bash
pnpm add -D @da_b1rmuda/pwa-rush-cli
```

### yarn

```bash
yarn add -D @da_b1rmuda/pwa-rush-cli
```

### bun

```bash
bun add -d @da_b1rmuda/pwa-rush-cli
```

## CLI invocation

The CLI parser supports these confirmed forms:

```bash
npx @da_b1rmuda/pwa-rush-cli init
npx @da_b1rmuda/pwa-rush-cli init --yes
npx @da_b1rmuda/pwa-rush-cli init --skip-install
npx @da_b1rmuda/pwa-rush-cli init --cwd ./path/to/app
```

The current help text still prints `@da_b1rmuda/pwa-cli`, but that name does not match `package.json.name`.

## Programmatic import

The emitted package surface confirms this import:

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'
```

See [runInit](./api/functions/run-init.md) for the full reference.

## Minimal verification

The smallest verification step that can be confirmed without mutating a target application is checking that the named export exists:

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

console.log(typeof runInit)
```

Expected output:

```text
function
```

## Installation caveat

The repository currently mixes `@da_b1rmuda/pwa-rush-cli`, `@da_b1rmuda/pwa-cli`, `@da_b1rmuda/pwa-rush`, and `@da_b1rmuda/pwa-react`. Installation of the CLI package itself can be documented from `package.json`, but a fully consistent dependency story for the generated runtime imports is blocked by the conflicts described in [troubleshooting](./guides/troubleshooting.md).
