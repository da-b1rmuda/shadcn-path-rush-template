# Troubleshooting

## Package name and generated imports do not match

Symptom:

- installed package resolves as `@da_b1rmuda/module-rush`
- generated files or older docs import `module-rush`

What is confirmed:

- package metadata uses the scoped name
- `init` and `create` templates still generate unscoped imports
- the packed-artifact smoke test fails on unscoped `module-rush` imports

Workaround:

- use scoped imports manually:
  - `@da_b1rmuda/module-rush`
  - `@da_b1rmuda/module-rush/analysis`
  - `@da_b1rmuda/module-rush/path`
  - `@da_b1rmuda/module-rush/testing`

## `module-rush check` reports missing files

Look for these diagnostics:

- `module-config/missing`
- `module-index/missing`
- `module-agent/missing`
- `module-readme/missing`

The first three are required by default. `module-readme/missing` is only produced when [`ModuleRushConfig.rules.requireReadme`](../api/types/module-rush-config.md) is enabled.

## Route diagnostics appear unexpectedly

Current rules can emit:

- `route-definition/invalid`
- `route-definition/duplicate-name`
- `route-definition/invalid-path`
- `routing/config-mismatch`

Check:

- every route path starts with `/`
- route names are globally unique
- route paths stay aligned with [`ModuleManifest.routing.basePath`](../api/types/module-manifest.md)
- route files exist when routing is enabled

## Doctor warns about aliases

[`doctorProject`](../api/functions/doctor-project.md) checks `tsconfig.json` path keys against the configured module and shared aliases. It accepts exact alias keys, wildcard alias keys, or the broad `@/*` alias.

## Lazy analysis shows warnings

[`analyzeLazyModules`](../api/functions/analyze-lazy-modules.md) warns when a lazy module:

- has no dynamic imports in route files
- has eager cross-module imports in route files
- pulls more than three transitive module dependencies
- points to a Vite manifest that does not match emitted chunks
