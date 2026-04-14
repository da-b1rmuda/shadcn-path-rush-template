# loadDefinitionModule

Загружает definition module для CLI use case.

## Назначение

[`loadDefinitionModule`](./load-definition-module.md) резолвит путь к файлу definition, загружает `.ts/.tsx/.cts/.mts` через встроенный transpile hook либо JS-модули через dynamic import и возвращает [`DefinitionModule`](../types/definition-module.md).

## Signature

```ts
const loadDefinitionModule: (
  definitionPath: string,
  cwd?: string
) => Promise<DefinitionModule>;
```

## Parameters

### `definitionPath`

- Type: `string`
- Required: yes

### `cwd`

- Type: `string`
- Required: no
- Default: `process.cwd()`

## Returns

- `Promise<`[`DefinitionModule`](../types/definition-module.md)`>`

## Throws

- `Error`, если файл definition не найден.
- `Error`, если export shape не совпадает с поддерживаемыми формами.

## Usage Notes

Подтверждённые export shapes:

- `export const definition = ...`
- `export default definition`
- `export default { definition, loadOptions }`

## See also

- [`DefinitionModule`](../types/definition-module.md)
- [`runCli`](./run-cli.md)
