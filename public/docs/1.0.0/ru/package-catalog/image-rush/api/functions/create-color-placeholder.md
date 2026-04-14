# createColorPlaceholder

Создаёт цветовой placeholder на основе средних значений RGB.

## Назначение

Функция использует `sharp().stats()`, берёт средние значения первых трёх каналов и возвращает [Placeholder](../types/placeholder.md) вида `{ kind: 'color', color: 'rgb(...)' }`.

## Signature

```ts
function createColorPlaceholder(inputPath: string): Promise<Placeholder>;
```

## Parameters

- `inputPath`: путь к исходному файлу

## Returns

`Promise<`[Placeholder](../types/placeholder.md)`>`

## Throws

Может пробросить ошибку из `sharp` или [ImgrProcessingError](../classes/imgr-processing-error.md) через [loadSharp](./load-sharp.md).

## Usage Notes

При отсутствии статистики по каналу функция использует значение `127`.

## Example

```ts
const placeholder = await createColorPlaceholder('src/assets/hero.jpg');
```

## See also

- [Placeholder](../types/placeholder.md)
- [createBlurPlaceholder](./create-blur-placeholder.md)
- [SharpImageProcessor](../classes/sharp-image-processor.md)
