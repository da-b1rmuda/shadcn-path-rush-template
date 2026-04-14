# ImageSourceSet

Набор кандидатов одного формата.

## Definition

```ts
type ImageSourceSet = {
  format: ImageFormat;
  candidates: ImageCandidate[];
};
```

## Fields

- `format`: [ImageFormat](./image-format.md)
- `candidates`: [ImageCandidate](./image-candidate.md)`[]`

## Notes

В [ImageAsset](./image-asset.md) поле `sources` хранит массив таких наборов. Fallback выбирается функцией [pickFallbackFromSources](../functions/pick-fallback-from-sources.md).

## See also

- [ImageAsset](./image-asset.md)
- [pickFallbackFromSources](../functions/pick-fallback-from-sources.md)
