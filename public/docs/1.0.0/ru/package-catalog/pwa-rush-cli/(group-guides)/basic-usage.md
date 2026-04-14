# Basic Usage

This guide describes the normal execution flow of [runInit](../api/functions/run-init.md).

## 1. Detect the target project

[runInit](../api/functions/run-init.md) resolves the target root from `options.cwd ?? process.cwd()` and then validates the project shape:

- `package.json` must exist
- `react`, `react-dom`, and `vite` must be present
- one supported `vite.config.*` file must exist
- one supported React entry file must exist

If any of those checks fail, the function throws before modifying files.

## 2. Build the setup model

[runInit](../api/functions/run-init.md) obtains configuration in one of three ways:

- use the default setup model immediately when `yes: true`
- apply programmatic `answers` immediately when `answers` is present
- otherwise prompt for quick or custom setup interactively

The full setup model is documented in [configuration](../configuration.md).

## 3. Normalize the setup

Before patching files, [runInit](../api/functions/run-init.md):

- disables the entire UI section when no UI element remains enabled
- forces `pwa.updateBehavior` to `'auto'` when `pwa.updateNotifications` is false
- disables `ui.updatePrompt` when `pwa.updateNotifications` is false

## 4. Optionally install dependencies

Unless `skipInstall` is set, [runInit](../api/functions/run-init.md):

- installs the runtime package name stored in `PWA_RUNTIME_PACKAGE` or the built-in default
- installs `vite-plugin-pwa` as a dev dependency, or the value from `PWA_VITE_PLUGIN_PACKAGE`

Current repository conflicts mean the default runtime package name should be treated carefully. See [troubleshooting](./troubleshooting.md).

## 5. Write generated assets

[runInit](../api/functions/run-init.md) writes:

- `manifest.webmanifest`
- four PNG icons inside the configured public directory

The manifest fields are derived directly from the final `app` configuration.

## 6. Patch the Vite config

The Vite patch step:

- ensures `VitePWA` is imported from `vite-plugin-pwa`
- locates the exported config object
- ensures a `plugins` array exists
- inserts or replaces a `VitePWA(...)` call

If the Vite config cannot be reduced to an exported object or function-returned object, the function throws. See [troubleshooting](./troubleshooting.md).

## 7. Patch the React entry

The React entry patch step:

- ensures `PWAProvider` is imported from `@da_b1rmuda/pwa-react`
- ensures `registerSW` is imported from `virtual:pwa-register`
- injects the service-worker registration block if it is not already present
- wraps the root render tree in `PWAProvider` when not already wrapped
- appends the generated `PWAExample` component when UI is enabled

The patch expects a `ReactDOM.createRoot(...).render(...)` call whose first argument is JSX.

## 8. Patch TypeScript type references

If the detected entry file is `src/main.tsx`, [runInit](../api/functions/run-init.md) ensures that `src/vite-env.d.ts` contains:

```ts
/// <reference types="vite-plugin-pwa/client" />
```

If the file does not exist, it is created with both the base Vite reference and the PWA reference.

## 9. Observe completion logs

When `silent` is not enabled, [runInit](../api/functions/run-init.md) logs the resolved paths of:

- the manifest
- the icon directory
- the entry file
- the Vite config
- the generated demo UI file, when one was written

## Confirmed smoke-tested path

On April 14, 2026, the built CLI completed successfully with:

```bash
node dist/index.js init --yes --skip-install --cwd <temp copy of template/existing-react-vite>
```

That verification confirms the happy-path execution of the package on a copied repository template, but it does not resolve the repository package-name conflicts documented in [troubleshooting](./troubleshooting.md).
