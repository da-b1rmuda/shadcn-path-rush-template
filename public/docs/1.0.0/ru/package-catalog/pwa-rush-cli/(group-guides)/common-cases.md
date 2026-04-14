# Common Cases

This guide collects confirmed usage patterns for [runInit](../api/functions/run-init.md).

## Run with default answers and no prompts

Use `--yes` or `yes: true` when you want the default setup model:

```bash
npx @da_b1rmuda/pwa-rush-cli init --yes
```

Programmatic equivalent:

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({ yes: true })
```

## Target another working directory

The CLI and [runInit](../api/functions/run-init.md) both support a custom target root:

```bash
npx @da_b1rmuda/pwa-rush-cli init --cwd ./apps/web
```

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({ cwd: './apps/web' })
```

## Skip dependency installation

Use this when dependency installation is handled separately, or when you only want to inspect the generated file changes:

```bash
npx @da_b1rmuda/pwa-rush-cli init --yes --skip-install
```

Important:

- this does not prevent file generation
- this does not prevent generated imports from referencing `@da_b1rmuda/pwa-react`

## Apply programmatic answers without interactive prompts

Providing `answers` to [runInit](../api/functions/run-init.md) skips the prompt flow even without `yes: true`:

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({
  cwd: './apps/web',
  skipInstall: true,
  answers: {
    setupMode: 'custom',
    app: {
      name: 'Rush Web',
      shortName: 'Rush Web',
      description: 'Rush Web as an installable Progressive Web App.',
      themeColor: '#0f172a',
      backgroundColor: '#ffffff',
    },
    pwa: {
      mode: 'basic',
      offline: true,
      updateNotifications: true,
      updateBehavior: 'prompt',
      autoRegister: true,
    },
    ui: {
      enabled: true,
      installButton: true,
      updatePrompt: true,
      offlineIndicator: true,
    },
    paths: {
      publicDir: 'public',
      entryFile: 'src/main.tsx',
    },
  },
})
```

## Use advanced mode

When `pwa.mode` is `'advanced'`, the generated registration code adds an hourly `registration.update()` poll after service-worker registration. The generated code skips the poll when:

- a registration is currently installing
- the browser is offline

## Disable the generated UI

You can disable the demo UI completely:

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({
  skipInstall: true,
  answers: {
    ui: {
      enabled: false,
      installButton: false,
      updatePrompt: false,
      offlineIndicator: false,
    },
  },
})
```

In that case, [runInit](../api/functions/run-init.md) does not write `src/pwa/PWAExample.tsx` or `src/pwa/PWAExample.jsx`.

## Silence normal logs in programmatic use

`silent: true` suppresses informational and success logs emitted by [runInit](../api/functions/run-init.md):

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({
  cwd: './apps/web',
  skipInstall: true,
  yes: true,
  silent: true,
})
```
