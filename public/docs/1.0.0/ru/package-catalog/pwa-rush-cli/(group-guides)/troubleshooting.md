# Troubleshooting

This page lists only confirmed failures, limitations, and repository inconsistencies.

## Package-name mismatches

### CLI package name

Confirmed conflict:

- `package.json` says `@da_b1rmuda/pwa-rush-cli`
- CLI help text says `@da_b1rmuda/pwa-cli`

Recommended documentation stance:

- use `@da_b1rmuda/pwa-rush-cli` as the install name because it is the package metadata source of truth
- treat help output as stale until the code is corrected

### Runtime package name

Confirmed conflict:

- the CLI installs and imports `@da_b1rmuda/pwa-react`
- the sibling runtime package in this repository is `@da_b1rmuda/pwa-rush`

Impact:

- the default dependency story is not repository-consistent
- generated imports may not match the actual runtime package available in this repository snapshot

## `package.json not found`

Thrown message:

```text
package.json not found. Run this CLI inside an existing React + Vite project.
```

Cause:

- the target root does not contain `package.json`

## Missing required dependencies

Thrown messages:

```text
This CLI only supports existing React + Vite projects.
A Vite dependency is required to initialize PWA support.
```

Cause:

- `react`, `react-dom`, or `vite` is missing from the target `package.json`

## Missing supported Vite config file

Thrown message:

```text
Unable to find vite.config.ts or vite.config.js in the current project.
```

Important nuance:

- the search logic actually checks six filenames, not two:
  - `vite.config.ts`
  - `vite.config.js`
  - `vite.config.mts`
  - `vite.config.mjs`
  - `vite.config.cts`
  - `vite.config.cjs`

## Missing supported entry file

Thrown message:

```text
Unable to find src/main.tsx or src/main.jsx in the current project.
```

Cause:

- the CLI currently supports only those two entry-file names

## Custom entry path does not exist

Thrown message pattern:

```text
Entry file not found: <configured path>
```

Cause:

- the final `paths.entryFile` value points to a file that does not exist

## Unsupported Vite config shape

Thrown messages:

```text
Unable to patch vite.config. Expected an exported Vite config object.
vite.config plugins property must be an array to inject VitePWA.
```

Cause:

- the exported Vite config could not be reduced to an object expression
- or the existing `plugins` property is present but is not an array

## Unsupported React entry shape

Thrown messages:

```text
Unable to patch the React entry file. Expected ReactDOM.createRoot(...).render(...)
Unable to patch the React entry file. Expected JSX in the root render call.
```

Cause:

- no `.render(...)` call was found
- or the render argument is not JSX

## Prompt cancellation

Thrown message:

```text
PWA setup was cancelled.
```

Cause:

- the prompt flow was cancelled by the user

## Dependency installation failure

Thrown message pattern:

```text
Dependency installation failed with exit code <code>.
```

Cause:

- the chosen package manager command failed

## TypeScript reference file behavior

Confirmed behavior:

- TypeScript targets patch `src/vite-env.d.ts`
- JavaScript targets do not

If your project uses TypeScript but does not use `src/main.tsx`, that layout is outside the confirmed support surface for this package.

## Source-repo typecheck status

Verification on April 14, 2026:

- `npm run typecheck` failed in `src/patchers/viteConfig.ts`

This does not erase the observed runtime behavior of the built package, but it is a confirmed repository issue for maintainers and contributors.
