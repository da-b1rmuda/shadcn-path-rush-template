# ImgrConfigError

Ошибка конфигурации preset или связанных параметров.

## Назначение

Класс используется в core-слое для ошибок валидации preset и quality.

## Constructor

```ts
class ImgrConfigError extends Error {
  readonly code = 'IMGR_CONFIG_ERROR';

  constructor(message: string);
}
```

## Methods

Специальные методы не добавляются.

## Properties

- `name`: `ImgrConfigError`
- `code`: `'IMGR_CONFIG_ERROR'`
- стандартные свойства `Error`

## Usage Notes

Этот класс выбрасывается, например, из [resolvePreset](../functions/resolve-preset.md).

## Example

```ts
throw new ImgrConfigError('Unknown preset "content".');
```

## See also

- [resolvePreset](../functions/resolve-preset.md)
- [ImgxPluginOptions](../types/imgx-plugin-options.md)
