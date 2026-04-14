# FAQ

## Is this package only a CLI?

No. It is primarily a CLI package, but it also exports one programmatic function: [runInit](./api/functions/run-init.md).

## Which CLI command is supported?

Only `init` is confirmed. If the first positional argument is missing, the CLI defaults to `init`. Any other command prints help and exits with status code `1`.

## Can it run without prompts?

Yes. You can use `--yes` in the CLI, or call [runInit](./api/functions/run-init.md) programmatically with `yes: true`.

## Do programmatic `answers` require `yes: true`?

No. If `answers` is provided to [runInit](./api/functions/run-init.md), the prompt flow is skipped even when `yes` is not set.

## Does `--skip-install` skip all changes?

No. It only skips dependency installation. [runInit](./api/functions/run-init.md) still writes the manifest and icons and still patches source files.

## What project layouts are supported?

Only confirmed React + Vite layouts with one supported Vite config file and one supported entry file:

- `src/main.tsx`
- `src/main.jsx`

## Does it support both TypeScript and JavaScript targets?

Yes, but only for the two confirmed entry-file names above. TypeScript targets receive an extra `src/vite-env.d.ts` patch; JavaScript targets do not.

## Which package name should be used to install the CLI?

`package.json` identifies the package as `@da_b1rmuda/pwa-rush-cli`. The current help text still prints `@da_b1rmuda/pwa-cli`, which is a repository inconsistency documented in [troubleshooting](./guides/troubleshooting.md).

## Can the runtime package name be overridden?

Only partially. `PWA_RUNTIME_PACKAGE` changes the package name used by the install command, but the generated imports written by [runInit](./api/functions/run-init.md) remain hardcoded to `@da_b1rmuda/pwa-react`.

## Are there separate public class or type reference pages?

No separately exported public classes, interfaces, enums, or type aliases are confirmed at the package boundary. The API reference currently contains only [runInit](./api/functions/run-init.md).
