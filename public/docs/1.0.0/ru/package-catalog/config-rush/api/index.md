# API Index

`config-rush` публикует API через пять entry points:

- `config-rush`
- `config-rush/node`
- `config-rush/react`
- `config-rush/plugin`
- `config-rush/cli`

Этот файл служит reference map и ссылается на отдельные страницы.

## Functions

- [`defineConfig`](./functions/define-config.md)
- [`defineRushAppConfig`](./functions/define-rush-app-config.md)
- [`loadConfig`](./functions/load-config.md)
- [`createInlineSource`](./functions/create-inline-source.md)
- [`createRuntimeObjectSource`](./functions/create-runtime-object-source.md)
- [`createWindowRuntimeSource`](./functions/create-window-runtime-source.md)
- [`createFetchRuntimeSource`](./functions/create-fetch-runtime-source.md)
- [`createEnvSource`](./functions/create-env-source.md)
- [`createFileSource`](./functions/create-file-source.md)
- [`watchConfig`](./functions/watch-config.md)
- [`configRushPlugin`](./functions/config-rush-plugin.md)
- [`loadDefinitionModule`](./functions/load-definition-module.md)
- [`parseCliArgs`](./functions/parse-cli-args.md)
- [`runCli`](./functions/run-cli.md)
- [`formatZodIssues`](./functions/format-zod-issues.md)

## Classes

- [`ValidationError`](./classes/validation-error.md)
- [`SourceError`](./classes/source-error.md)
- [`ClientAccessError`](./classes/client-access-error.md)

## Constants

- [`RUSH_MODES`](./constants/rush-modes.md)
- [`rushModeSchema`](./constants/rush-mode-schema.md)
- [`CONFIG_RUSH_CLIENT_MODULE_ID`](./constants/config-rush-client-module-id.md)
- [`CONFIG_RUSH_UPDATE_EVENT`](./constants/config-rush-update-event.md)

## Components and Hooks

- [`ConfigProvider`](./components/config-provider.md)
- [`useConfig`](./hooks/use-config.md)

## Types

- Core: [`ConfigDefinition`](./types/config-definition.md), [`ConfigShape`](./types/config-shape.md), [`ConfigSource`](./types/config-source.md), [`ConfigTarget`](./types/config-target.md), [`ConfigScope`](./types/config-scope.md), [`ConfigValidationMode`](./types/config-validation-mode.md), [`RushMode`](./types/rush-mode.md), [`RushAppPresetShape`](./types/rush-app-preset-shape.md), [`InferShape`](./types/infer-shape.md), [`InferConfig`](./types/infer-config.md), [`LoadConfigOptions`](./types/load-config-options.md), [`LoadedConfig`](./types/loaded-config.md), [`LoadedConfigHelpers`](./types/loaded-config-helpers.md).
- Diagnostics and metadata: [`ConfigFieldMetadata`](./types/config-field-metadata.md), [`ConfigSchemaEntry`](./types/config-schema-entry.md), [`LoadContext`](./types/load-context.md), [`ResolvedSource`](./types/resolved-source.md), [`ExplainResult`](./types/explain-result.md), [`DiagnosticsConflict`](./types/diagnostics-conflict.md), [`DiagnosticsUnusedPath`](./types/diagnostics-unused-path.md), [`DiagnosticsReport`](./types/diagnostics-report.md).
- Plugins: [`ConfigBeforeValidatePayload`](./types/config-before-validate-payload.md), [`ConfigBeforeValidateHook`](./types/config-before-validate-hook.md), [`ConfigAfterValidatePayload`](./types/config-after-validate-payload.md), [`ConfigAfterValidateHook`](./types/config-after-validate-hook.md), [`ConfigPluginContext`](./types/config-plugin-context.md), [`ConfigPlugin`](./types/config-plugin.md).
- Runtime and Node: [`FetchRuntimeSourceOptions`](./types/fetch-runtime-source-options.md), [`EnvSourceOptions`](./types/env-source-options.md), [`FileSourceOptions`](./types/file-source-options.md), [`ConfigDiffKind`](./types/config-diff-kind.md), [`ConfigDiffEntry`](./types/config-diff-entry.md), [`SubscriptionPayload`](./types/subscription-payload.md), [`SubscriptionCallback`](./types/subscription-callback.md), [`WatchConfigOptions`](./types/watch-config-options.md), [`WatchableConfigHelpers`](./types/watchable-config-helpers.md), [`WatchableConfig`](./types/watchable-config.md).
- React, plugin and CLI: [`ConfigProviderProps`](./types/config-provider-props.md), [`ConfigRushPluginOptions`](./types/config-rush-plugin-options.md), [`DefinitionModule`](./types/definition-module.md), [`CliIO`](./types/cli-io.md), [`CliEnvironment`](./types/cli-environment.md), [`ParsedCliArgs`](./types/parsed-cli-args.md).
