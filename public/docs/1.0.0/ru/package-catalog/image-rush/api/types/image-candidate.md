# ImageCandidate

Контракт одного сгенерированного варианта изображения.

## Definition

```ts
type ImageCandidate = {
  url: string;
  width: number;
  height: number;
  format: ImageFormat;
  bytes?: number;
};
```

## Fields

- `url`: `string`
  URL кандидата
- `width`: `number`
  Ширина кандидата
- `height`: `number`
  Высота кандидата
- `format`: [ImageFormat](./image-format.md)
  Формат кандидата
- `bytes`: `number | undefined`
  Размер файла в байтах, если известен

## Notes

Массивы [ImageCandidate](./image-candidate.md) используются в [ImageSourceSet](./image-source-set.md) и [buildSrcSet](../functions/build-src-set.md).

## See also

- [ImageSourceSet](./image-source-set.md)
- [GeneratedVariant](./generated-variant.md)
- [buildSrcSet](../functions/build-src-set.md)
