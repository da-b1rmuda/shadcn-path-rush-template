# ImgrProcessingError

Ошибка обработки изображения.

## Назначение

Класс используется для ошибок чтения метаданных изображения и невозможности загрузить `sharp`.

## Constructor

```ts
class ImgrProcessingError extends Error {
  readonly code = 'IMGR_PROCESSING_ERROR';

  constructor(message: string);
}
```

## Methods

Специальные методы не добавляются.

## Properties

- `name`: `ImgrProcessingError`
- `code`: `'IMGR_PROCESSING_ERROR'`
- стандартные свойства `Error`

## Usage Notes

Класс выбрасывается в [loadSharp](../functions/load-sharp.md) и [SharpImageProcessor](./sharp-image-processor.md).

## Example

```ts
throw new ImgrProcessingError('Unable to read metadata for image: hero.jpg');
```

## See also

- [loadSharp](../functions/load-sharp.md)
- [SharpImageProcessor](./sharp-image-processor.md)
