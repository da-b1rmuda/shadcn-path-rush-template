# Advanced Example

This example uses the programmatic surface of [runInit](../api/functions/run-init.md) with explicit `answers` and `pwa.mode: 'advanced'`.

## Example

```ts
import { runInit } from '@da_b1rmuda/pwa-rush-cli'

await runInit({
  cwd: './apps/web',
  skipInstall: true,
  silent: true,
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
      mode: 'advanced',
      offline: true,
      updateNotifications: true,
      updateBehavior: 'prompt',
      autoRegister: true,
    },
    ui: {
      enabled: true,
      installButton: true,
      updatePrompt: true,
      offlineIndicator: false,
    },
    paths: {
      publicDir: 'public',
      entryFile: 'src/main.tsx',
    },
  },
})
```

## What this changes relative to the default path

- prompt flow is skipped because `answers` is provided
- `setupMode` is recorded as `'custom'`
- advanced mode adds the hourly `registration.update()` polling block
- the generated demo UI includes `InstallPWAButton` and `PWAUpdatePrompt`, but not `OfflineIndicator`
- normal success logs are suppressed because `silent: true`

## Why this example uses `updateBehavior: 'prompt'`

That combination keeps the generated update-ready callback and the generated update-prompt UI aligned. In auto-update mode, the CLI-generated registration code does not add `onNeedRefresh()`.

## Expected output summary

The resulting file set is the same as in the basic example, except that the generated demo component reflects the chosen UI flags and the entry patch includes the advanced registration logic.
