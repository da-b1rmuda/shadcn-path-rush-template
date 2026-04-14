# SharpImageProcessor

Стандартная реализация [ImageProcessor](../types/image-processor.md) на базе `sharp`.

## Назначение

Класс читает исходное изображение, вычисляет эффективные ширины, рендерит варианты по форматам, создаёт placeholder и возвращает [ProcessorOutput](../types/processor-output.md).

## Constructor

```ts
class SharpImageProcessor implements ImageProcessor {
  constructor(options: SharpProcessorOptions);

  process(input: BuildImageAssetInput): Promise<ProcessorOutput>;
}
```

## Methods

- `process(input)` — основной метод обработки изображения

## Properties

Публичные свойства не экспортируются.

## Usage Notes

- Если `options.concurrency` не задан, используется `os.availableParallelism() - 1` с ограничением диапазона `1..6`
- Ширины больше оригинальной отбрасываются; если ничего не осталось, используется оригинальная ширина
- Для `placeholder: 'blur'` вызывается [createBlurPlaceholder](../functions/create-blur-placeholder.md)
- Для `placeholder: 'color'` вызывается [createColorPlaceholder](../functions/create-color-placeholder.md)

## Example

```ts
const processor = new SharpImageProcessor({
  outputDir: 'public/assets',
  publicBase: '/assets',
});
```

## See also

- [SharpProcessorOptions](../types/sharp-processor-options.md)
- [ImageProcessor](../types/image-processor.md)
- [createStableAssetId](../functions/create-stable-asset-id.md)
