# PresetMap

Карта preset-имён на объекты [ImagePresetConfig](./image-preset-config.md).

## Definition

```ts
type PresetMap = Record<string, ImagePresetConfig>;
```

## Fields

Полей с фиксированными именами нет. Ключами служат произвольные названия preset.

## Notes

Тип используется в [ImgxPluginOptions](./imgx-plugin-options.md), [NormalizedPluginOptions](./normalized-plugin-options.md) и [resolvePreset](../functions/resolve-preset.md).

## See also

- [ImagePresetConfig](./image-preset-config.md)
- [ImagePreset](./image-preset.md)
- [defaultPresets](../constants/default-presets.md)
