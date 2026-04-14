# loadSharp

Лениво импортирует `sharp` и кэширует результат.

## Назначение

Функция выполняет `import('sharp')`, возвращает `module.default ?? module` и сохраняет promise для повторного использования.

## Signature

```ts
function loadSharp(): Promise<any>;
```

## Parameters

Параметров нет.

## Returns

`Promise<any>` — экспорт модуля `sharp`.

## Throws

- [ImgrProcessingError](../classes/imgr-processing-error.md), если `sharp` не удалось импортировать

## Usage Notes

Функция используется [SharpImageProcessor](../classes/sharp-image-processor.md) и placeholder helper-функциями.

## Example

```ts
const sharp = await loadSharp();
const metadata = await sharp('hero.jpg').metadata();
```

## See also

- [SharpImageProcessor](../classes/sharp-image-processor.md)
- [createBlurPlaceholder](./create-blur-placeholder.md)
- [createColorPlaceholder](./create-color-placeholder.md)
