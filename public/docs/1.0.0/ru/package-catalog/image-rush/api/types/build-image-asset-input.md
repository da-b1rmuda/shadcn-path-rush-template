# BuildImageAssetInput

Входные данные для [ImageProcessor](./image-processor.md).

## Definition

```ts
type BuildImageAssetInput = {
  sourcePath: string;
  sourcePublicPath: string;
  stableId: string;
  preset: ImagePreset;
};
```

## Fields

- `sourcePath`: `string`
  Путь к исходному файлу
- `sourcePublicPath`: `string`
  Публичный путь исходного файла
- `stableId`: `string`
  Стабильный ID ассета
- `preset`: [ImagePreset](./image-preset.md)

## Notes

Тип используется [SharpImageProcessor](../classes/sharp-image-processor.md) и [normalizeImageAsset](../functions/normalize-image-asset.md).

## See also

- [ImagePreset](./image-preset.md)
- [ImageProcessor](./image-processor.md)
- [ProcessorOutput](./processor-output.md)
