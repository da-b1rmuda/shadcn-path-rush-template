# GeneratedVariant

Контракт одного варианта, который возвращает процессор.

## Definition

```ts
type GeneratedVariant = {
  url: string;
  width: number;
  height: number;
  format: ImageFormat;
  bytes: number;
};
```

## Fields

- `url`: `string`
- `width`: `number`
- `height`: `number`
- `format`: [ImageFormat](./image-format.md)
- `bytes`: `number`

## Notes

После нормализации [GeneratedVariant](./generated-variant.md) превращается в [ImageCandidate](./image-candidate.md).

## See also

- [ProcessorOutput](./processor-output.md)
- [ImageCandidate](./image-candidate.md)
- [normalizeImageAsset](../functions/normalize-image-asset.md)
