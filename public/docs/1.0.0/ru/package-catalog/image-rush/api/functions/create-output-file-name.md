# createOutputFileName

Строит имя выходного файла из стабильного ID, ширины и расширения.

## Назначение

Функция возвращает строку вида `${stableId}-${width}.${ext}`.

## Signature

```ts
function createOutputFileName(stableId: string, width: number, ext: string): string;
```

## Parameters

- `stableId`: строковый ID ассета
- `width`: ширина варианта
- `ext`: расширение файла без точки

## Returns

`string`

## Throws

Явных исключений нет.

## Usage Notes

Функция используется [SharpImageProcessor](../classes/sharp-image-processor.md) после вычисления [createStableAssetId](./create-stable-asset-id.md).

## Example

```ts
const fileName = createOutputFileName('hero-c944464ea4', 960, 'webp');
```

## See also

- [createStableAssetId](./create-stable-asset-id.md)
- [SharpImageProcessor](../classes/sharp-image-processor.md)
