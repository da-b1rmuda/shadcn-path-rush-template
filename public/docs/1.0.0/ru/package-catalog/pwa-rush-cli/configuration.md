# Configuration

This package accepts configuration through CLI flags, programmatic options passed to [runInit](./api/functions/run-init.md), interactive prompts, and two environment variables used during dependency installation.

## CLI flags

| Flag | Required | Default | Description |
| --- | --- | --- | --- |
| `--cwd <path>` | No | current working directory | Target project root used by the initialization workflow. |
| `--skip-install` | No | `false` | Skips dependency installation but still writes files and patches source code. |
| `--yes` | No | `false` | Skips prompts and uses the default setup model unless programmatic `answers` overrides are provided. |

## Programmatic options for [runInit](./api/functions/run-init.md)

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `cwd` | `string` | No | `process.cwd()` | Target project root. |
| `skipInstall` | `boolean` | No | `false` | Prevents package-manager installation commands from running. |
| `yes` | `boolean` | No | `false` | Uses the default setup model without interactive prompts. |
| `answers` | `Partial<SetupConfig>` | No | none | Applies programmatic overrides to the setup model. If present, prompts are skipped even when `yes` is not set. |
| `silent` | `boolean` | No | `false` | Suppresses informational and success logs inside [runInit](./api/functions/run-init.md). |

## Setup model

The setup model used by [runInit](./api/functions/run-init.md) contains five sections:

- `setupMode`
- `app`
- `pwa`
- `ui`
- `paths`

### Confirmed default values

| Field | Default | Notes |
| --- | --- | --- |
| `setupMode` | `'quick'` | Initial mode before prompt selection. |
| `app.name` | derived from target `package.json.name` | Falls back to `Vite React App` when the name is missing. |
| `app.shortName` | derived from `app.name` | Truncated to 12 characters when the derived name is longer. |
| `app.description` | ``${app.name} as an installable Progressive Web App.`` | In quick mode this description is always regenerated from the chosen app name. |
| `app.themeColor` | `#0f172a` | Must match `^#([0-9a-f]{3}|[0-9a-f]{6})$` when entered interactively. |
| `app.backgroundColor` | `#ffffff` | Same validation as `app.themeColor`. |
| `pwa.mode` | `'basic'` | `'advanced'` is available in custom mode or via `answers`. |
| `pwa.offline` | `true` | Controls whether `navigateFallback: 'index.html'` is added to Workbox options. |
| `pwa.updateNotifications` | `true` | Also affects UI normalization. |
| `pwa.updateBehavior` | `'prompt'` | Mapped to `registerType: 'prompt'` or `registerType: 'autoUpdate'` in VitePWA options. |
| `pwa.autoRegister` | `true` | Passed to `registerSW({ immediate: ... })`. |
| `ui.enabled` | `true` | Can be normalized back to `false` when no UI element remains enabled. |
| `ui.installButton` | `true` | Controls whether `InstallPWAButton` is added to the generated demo component. |
| `ui.updatePrompt` | `true` | Controls whether `PWAUpdatePrompt` is added to the generated demo component. |
| `ui.offlineIndicator` | `true` | Controls whether `OfflineIndicator` is added to the generated demo component. |
| `paths.publicDir` | `'public'` | Default output directory for the manifest and icons. |
| `paths.entryFile` | relative path to the detected entry file | Derived from `src/main.tsx` or `src/main.jsx`. |

### Quick setup prompt surface

Quick mode asks only for:

- app name
- short name
- whether UI components should be added

In quick mode:

- `app.description` is regenerated from the chosen app name
- default colors remain unchanged
- the PWA section remains at default values

### Custom setup prompt surface

Custom mode exposes all confirmed fields:

- `app.name`
- `app.shortName`
- `app.description`
- `app.themeColor`
- `app.backgroundColor`
- `pwa.mode`
- `pwa.offline`
- `pwa.updateNotifications`
- `pwa.updateBehavior`
- `pwa.autoRegister`
- `ui.enabled` through the `addUI` prompt
- `ui.installButton`
- `ui.updatePrompt`
- `ui.offlineIndicator`
- `paths.publicDir`
- `paths.entryFile`

## Normalization rules

Before patching files, [runInit](./api/functions/run-init.md) normalizes the setup model:

- if `ui.enabled` is false or all three UI toggles are false, the final UI configuration becomes fully disabled
- if `pwa.updateNotifications` is false, the final `pwa.updateBehavior` becomes `'auto'`
- if `pwa.updateNotifications` is false, the final `ui.updatePrompt` becomes `false`

## Environment variables

Two environment variables affect dependency installation:

| Variable | Used for | Default |
| --- | --- | --- |
| `PWA_RUNTIME_PACKAGE` | runtime package install name | `@da_b1rmuda/pwa-react` |
| `PWA_VITE_PLUGIN_PACKAGE` | Vite plugin install name | `vite-plugin-pwa` |

Important limitation:

- these variables change only the install commands
- generated source imports are still hardcoded to `@da_b1rmuda/pwa-react`

## Generated VitePWA configuration

The package generates `VitePWA(...)` options with these confirmed fixed or derived fields:

| Field | Value source |
| --- | --- |
| `registerType` | `'autoUpdate'` when `pwa.updateBehavior === 'auto'`, otherwise `'prompt'` |
| `injectRegister` | `null` |
| `includeAssets` | fixed list of the four generated icon paths |
| `manifest` | generated from the final `app` configuration |
| `workbox.cleanupOutdatedCaches` | `true` |
| `workbox.clientsClaim` | `true` |
| `workbox.skipWaiting` | `true` when `pwa.updateBehavior === 'auto'`, otherwise `false` |
| `workbox.navigateFallback` | `'index.html'` when `pwa.offline === true`, otherwise omitted |
| `devOptions.enabled` | `false` |

## Generated registration behavior

The React entry patch generated by [runInit](./api/functions/run-init.md):

- imports `registerSW` from `virtual:pwa-register`
- imports `PWAProvider` from `@da_b1rmuda/pwa-react`
- dispatches custom events for registration, offline-ready, update-ready, and register errors
- assigns the update function to `window.__PWA_RUSH_UPDATE_SW__`

In `pwa.mode === 'advanced'`, the generated code also adds an hourly `registration.update()` poll that skips work when the registration is currently installing or when the browser is offline.

In `pwa.updateBehavior === 'auto'`, the generated code does not add the `onNeedRefresh()` callback. That means the CLI itself does not inject an update-ready custom event in that mode.
