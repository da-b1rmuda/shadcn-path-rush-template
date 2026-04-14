# runCli

Запускает CLI flow для команд `inspect` и `validate`.

## Назначение

[`runCli`](./run-cli.md) использует [`parseCliArgs`](./parse-cli-args.md), [`loadDefinitionModule`](./load-definition-module.md) и [`loadConfig`](./load-config.md), затем печатает результат в выбранном формате и возвращает exit code.

## Signature

```ts
const runCli: (
  argv: readonly string[],
  environment?: Partial<CliEnvironment>
) => Promise<number>;
```

## Parameters

### `argv`

- Type: `readonly string[]`
- Required: yes

### `environment`

- Type: `Partial<`[`CliEnvironment`](../types/cli-environment.md)`>`
- Required: no

## Returns

- `Promise<number>` с exit code

## Usage Notes

- `inspect` печатает masked config и diagnostics.
- `validate` печатает validation status.
- При `ValidationError` возвращается `1`.

## Example

```ts
const exitCode = await runCli(["inspect", "config.rush.ts", "--format", "json"]);
```

## See also

- [`CliEnvironment`](../types/cli-environment.md)
- [`loadDefinitionModule`](./load-definition-module.md)
- [`parseCliArgs`](./parse-cli-args.md)
