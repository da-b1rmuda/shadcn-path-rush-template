# DefinitionModule

Нормализованный результат загрузки CLI definition module.

## Definition

```ts
interface DefinitionModule {
  readonly definition: ConfigDefinition;
  readonly loadOptions?: LoadConfigOptions<ConfigTarget> | undefined;
}
```

## Fields

- `definition` - загруженная schema definition.
- `loadOptions` - optional default load options для CLI.

## See also

- [`loadDefinitionModule`](../functions/load-definition-module.md)
- [`runCli`](../functions/run-cli.md)
