# CliEnvironment

Окружение, которое может быть подставлено в [`runCli`](../functions/run-cli.md).

## Definition

```ts
interface CliEnvironment {
  readonly io: CliIO;
  loadDefinitionModule: (
    definitionPath: string,
    cwd: string
  ) => Promise<DefinitionModule>;
}
```

## Fields

- `io` - [`CliIO`](./cli-io.md).
- `loadDefinitionModule` - loader function для definition modules.

## See also

- [`CliIO`](./cli-io.md)
- [`DefinitionModule`](./definition-module.md)
