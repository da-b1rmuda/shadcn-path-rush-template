# defaultPresets

Встроенный набор presets пакета.

## Назначение

Константа экспортирует [PresetMap](../types/preset-map.md) с тремя пресетами: `avatar`, `card` и `hero`.

## Definition

```ts
const defaultPresets: PresetMap;
```

## Values

- `avatar`
  Widths: `64`, `128`, `256`
  Formats: `webp`, `png`
  Placeholder: `color`
  Sizes: `64px`
- `card`
  Widths: `320`, `640`, `960`
  Formats: `avif`, `webp`, `jpeg`
  Placeholder: `blur`
  Sizes: `(max-width: 768px) 100vw, 33vw`
- `hero`
  Widths: `640`, `960`, `1280`, `1600`, `1920`
  Formats: `avif`, `webp`, `jpeg`
  Placeholder: `blur`
  Sizes: `100vw`

## Notes

Пользовательские presets в [ImgxPluginOptions](../types/imgx-plugin-options.md) мерджатся поверх этой константы.

## Example

```ts
const preset = defaultPresets.card;
```

## See also

- [PresetMap](../types/preset-map.md)
- [ImagePresetConfig](../types/image-preset-config.md)
- [resolvePreset](../functions/resolve-preset.md)
