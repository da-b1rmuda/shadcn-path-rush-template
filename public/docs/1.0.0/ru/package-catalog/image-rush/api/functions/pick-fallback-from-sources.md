# pickFallbackFromSources

Выбирает fallback-кандидат из массива [ImageSourceSet](../types/image-source-set.md).

## Назначение

Функция проходит форматы в фиксированном порядке `jpeg`, `png`, `webp`, `avif` и возвращает последний кандидат из первого непустого набора.

## Signature

```ts
function pickFallbackFromSources(sources: ImageSourceSet[]): ImageCandidate;
```

## Parameters

- `sources`: массив [ImageSourceSet](../types/image-source-set.md)

## Returns

[ImageCandidate](../types/image-candidate.md) — выбранный fallback.

## Throws

- `Error`, если среди `sources` нет ни одного кандидата

## Usage Notes

Функция предполагает, что кандидаты внутри одного source уже отсортированы по ширине. В таком случае fallback будет изображением максимальной ширины в выбранном формате.

## Example

```ts
const fallback = pickFallbackFromSources([
  { format: 'webp', candidates: [{ url: '/hero-640.webp', width: 640, height: 360, format: 'webp' }] },
  { format: 'jpeg', candidates: [{ url: '/hero-960.jpg', width: 960, height: 540, format: 'jpeg' }] },
]);
```

## See also

- [ImageSourceSet](../types/image-source-set.md)
- [ImageCandidate](../types/image-candidate.md)
- [normalizeImageAsset](./normalize-image-asset.md)
