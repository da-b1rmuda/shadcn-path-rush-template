# ImageProcessor

Интерфейс процессора изображений.

## Definition

```ts
interface ImageProcessor {
  process(input: BuildImageAssetInput): Promise<ProcessorOutput>;
}
```

## Fields

- `process(input)`: принимает [BuildImageAssetInput](./build-image-asset-input.md) и возвращает `Promise<`[ProcessorOutput](./processor-output.md)`>`

## Notes

Если [ImgxPluginOptions](./imgx-plugin-options.md) не содержит `processor`, [ImageRushPlugin](../functions/image-rush-plugin.md) создаёт [SharpImageProcessor](../classes/sharp-image-processor.md).

## See also

- [BuildImageAssetInput](./build-image-asset-input.md)
- [ProcessorOutput](./processor-output.md)
- [SharpImageProcessor](../classes/sharp-image-processor.md)
