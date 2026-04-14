# ProcessorOutput

Контракт результата работы [ImageProcessor](./image-processor.md).

## Definition

```ts
type ProcessorOutput = {
  original: {
    width: number;
    height: number;
    format: string;
  };
  placeholder: Placeholder;
  variants: GeneratedVariant[];
};
```

## Fields

- `original.width`: `number`
- `original.height`: `number`
- `original.format`: `string`
- `placeholder`: [Placeholder](./placeholder.md)
- `variants`: [GeneratedVariant](./generated-variant.md)`[]`

## Notes

Этот тип возвращает [SharpImageProcessor](../classes/sharp-image-processor.md). Затем он передаётся в [normalizeImageAsset](../functions/normalize-image-asset.md).

## See also

- [ImageProcessor](./image-processor.md)
- [GeneratedVariant](./generated-variant.md)
- [normalizeImageAsset](../functions/normalize-image-asset.md)
