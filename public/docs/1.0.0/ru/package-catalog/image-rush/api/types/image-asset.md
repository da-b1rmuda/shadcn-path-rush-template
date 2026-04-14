# ImageAsset

Основной публичный контракт ассета, возвращаемого импортом `?imgx`.

## Definition

```ts
type ImageAsset = {
  kind: 'imgr.asset';
  schemaVersion: 1;
  id: string;
  width: number;
  height: number;
  aspectRatio: number;
  placeholder: Placeholder;
  sizes?: string;
  fallback: ImageCandidate;
  sources: ImageSourceSet[];
  metadata: {
    originalFormat: string;
    originalWidth: number;
    originalHeight: number;
    generatedAt: string;
  };
};
```

## Fields

- `kind`: `'imgr.asset'`
  Жёстко заданный маркер типа
- `schemaVersion`: `1`
  Версия схемы ассета
- `id`: `string`
  Стабильный ID ассета
- `width`: `number`
  Ширина оригинала
- `height`: `number`
  Высота оригинала
- `aspectRatio`: `number`
  Отношение `width / height`
- `placeholder`: [Placeholder](./placeholder.md)
- `sizes`: `string | undefined`
  Значение `sizes` из preset
- `fallback`: [ImageCandidate](./image-candidate.md)
- `sources`: [ImageSourceSet](./image-source-set.md)`[]`
- `metadata.originalFormat`: `string`
- `metadata.originalWidth`: `number`
- `metadata.originalHeight`: `number`
- `metadata.generatedAt`: `string`
  ISO timestamp времени нормализации ассета

## Notes

Объект создаётся функцией [normalizeImageAsset](../functions/normalize-image-asset.md) и используется компонентом [ImageRush](../components/image-rush.md).

## See also

- [normalizeImageAsset](../functions/normalize-image-asset.md)
- [ImageRush](../components/image-rush.md)
- [Placeholder](./placeholder.md)
