# buildImageAsset

Основной helper Vite-пайплайна для подготовки [ImageAsset](../types/image-asset.md).

## Назначение

Функция выбирает preset, вычисляет стабильный ID, при необходимости работает с manifest-кэшем и передаёт обработку в [ImageProcessor](../types/image-processor.md). Затем результат нормализуется в [ImageAsset](../types/image-asset.md).

## Signature

```ts
function buildImageAsset(
  sourcePath: string,
  query: ImgxQuery,
  options: NormalizedPluginOptions,
  processor: ImageProcessor,
  cacheStore?: ImageCacheManifestStore
): Promise<{
  asset: ImageAsset;
  cacheStatus: 'memory-hit' | 'disk-hit' | 'miss';
}>;
```

## Parameters

- `sourcePath`: путь к исходному файлу
- `query`: [ImgxQuery](../types/imgx-query.md)
- `options`: [NormalizedPluginOptions](../types/normalized-plugin-options.md)
- `processor`: [ImageProcessor](../types/image-processor.md)
- `cacheStore`: [ImageCacheManifestStore](../classes/image-cache-manifest-store.md), опционально

## Returns

`Promise<{ asset: ImageAsset; cacheStatus: 'memory-hit' | 'disk-hit' | 'miss' }>`

## Throws

- [ImgrConfigError](../classes/imgr-config-error.md) из [resolvePreset](./resolve-preset.md)
- [ImgrProcessingError](../classes/imgr-processing-error.md) или другие ошибки из переданного процессора

## Usage Notes

- Повторные параллельные вызовы для одного и того же `sourcePath` + `query` дедуплицируются in-flight кэшем
- Для дискового manifest-кэша ключ строится из нормализованного пути, хэша содержимого файла и хэша preset
- При cache hit с диска возвращается сохранённый [ImageAsset](../types/image-asset.md) без повторной обработки изображения

## Example

Прямой пользовательский пример в репозитории не найден. Функция вызывается внутри [ImageRushPlugin](./image-rush-plugin.md).

## See also

- [ImageRushPlugin](./image-rush-plugin.md)
- [ImageCacheManifestStore](../classes/image-cache-manifest-store.md)
- [ImageProcessor](../types/image-processor.md)
