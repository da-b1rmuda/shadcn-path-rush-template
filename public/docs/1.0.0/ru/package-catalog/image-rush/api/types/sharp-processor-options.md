# SharpProcessorOptions

Конфигурация [SharpImageProcessor](../classes/sharp-image-processor.md).

## Definition

```ts
type SharpProcessorOptions = {
  outputDir: string;
  publicBase: string;
  concurrency?: number;
};
```

## Fields

- `outputDir`: `string`
  Каталог записи выходных файлов
- `publicBase`: `string`
  URL-префикс для `variant.url`
- `concurrency`: `number | undefined`
  Степень параллелизма; при отсутствии выбирается авто-значение

## Notes

Тип отличается от `sharp`-ветки в [ImgxPluginOptions](./imgx-plugin-options.md): здесь уже нет опционального вложенного объекта, а поля передаются непосредственно в конструктор процессора.

## See also

- [SharpImageProcessor](../classes/sharp-image-processor.md)
- [ImgxPluginOptions](./imgx-plugin-options.md)
