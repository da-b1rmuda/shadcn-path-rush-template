# createBlurPlaceholder

Создаёт blur placeholder для исходного изображения.

## Назначение

Функция использует `sharp`, уменьшает изображение до ширины `24`, применяет `blur()`, кодирует JPEG с качеством `40` и возвращает [Placeholder](../types/placeholder.md) вида `{ kind: 'blur', dataUrl }`.

## Signature

```ts
function createBlurPlaceholder(inputPath: string): Promise<Placeholder>;
```

## Parameters

- `inputPath`: путь к исходному файлу

## Returns

`Promise<`[Placeholder](../types/placeholder.md)`>`

## Throws

Может пробросить ошибку из `sharp` или [ImgrProcessingError](../classes/imgr-processing-error.md) через [loadSharp](./load-sharp.md).

## Usage Notes

Функция вызывается [SharpImageProcessor](../classes/sharp-image-processor.md), когда `input.preset.placeholder === 'blur'`.

## Example

```ts
const placeholder = await createBlurPlaceholder('src/assets/hero.jpg');
```

## See also

- [Placeholder](../types/placeholder.md)
- [createColorPlaceholder](./create-color-placeholder.md)
- [SharpImageProcessor](../classes/sharp-image-processor.md)
