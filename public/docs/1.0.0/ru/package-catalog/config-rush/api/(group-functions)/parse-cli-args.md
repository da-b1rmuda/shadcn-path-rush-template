# parseCliArgs

Разбирает массив CLI аргументов в структуру [`ParsedCliArgs`](../types/parsed-cli-args.md).

## Назначение

[`parseCliArgs`](./parse-cli-args.md) принимает `inspect` или `validate`, разбирает `--mode`, `--target`, `--format`, `--cwd`, `--warn`, `--strict` и возвращает нормализованный объект аргументов.

## Signature

```ts
const parseCliArgs: (
  argv: readonly string[]
) => ParsedCliArgs;
```

## Parameters

### `argv`

- Type: `readonly string[]`
- Required: yes

## Returns

- [`ParsedCliArgs`](../types/parsed-cli-args.md)

## Throws

- `Error`, если команда неизвестна.
- `Error`, если отсутствует `definitionPath`.
- `Error`, если option имеет недопустимое значение.

## See also

- [`ParsedCliArgs`](../types/parsed-cli-args.md)
- [`runCli`](./run-cli.md)
