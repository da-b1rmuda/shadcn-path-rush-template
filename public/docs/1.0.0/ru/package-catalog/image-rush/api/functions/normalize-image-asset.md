# normalizeImageAsset

Собирает [ImageAsset](../types/image-asset.md) из входа пайплайна и результата процессора.

## Назначение

Функция группирует `variants` по формату, сортирует кандидатов по ширине, выбирает fallback через [pickFallbackFromSources](./pick-fallback-from-sources.md) и добавляет служебные метаданные.

## Signature

```ts
function normalizeImageAsset(
  input: BuildImageAssetInput,
  output: ProcessorOutput
): ImageAsset;
```

## Parameters

- `input`: [BuildImageAssetInput](../types/build-image-asset-input.md)
- `output`: [ProcessorOutput](../types/processor-output.md)

## Returns

[ImageAsset](../types/image-asset.md)

## Throws

Явно ничего не выбрасывает, но может пробросить ошибку из [pickFallbackFromSources](./pick-fallback-from-sources.md), если `output.variants` пуст.

## Usage Notes

- `metadata.generatedAt` заполняется текущим временем через `new Date().toISOString()`
- `sizes` в результате берётся из `input.preset.sizes`
- `aspectRatio` вычисляется как `output.original.width / output.original.height`

## Example

Прямой пример использования в репозитории не найден. Функция используется внутри [buildImageAsset](./build-image-asset.md).

## See also

- [BuildImageAssetInput](../types/build-image-asset-input.md)
- [ProcessorOutput](../types/processor-output.md)
- [ImageAsset](../types/image-asset.md)
