# ImagePresetConfig

Входная конфигурация preset до нормализации.

## Definition

```ts
type ImagePresetConfig = {
  widths: number[];
  formats: ImageFormat[];
  quality?: Partial<Record<ImageFormat, number>>;
  placeholder?: PlaceholderKind;
  sizes?: string;
};
```

## Fields

- `widths`: `number[]`
- `formats`: [ImageFormat](./image-format.md)`[]`
- `quality`: `Partial<Record<ImageFormat, number>> | undefined`
- `placeholder`: [PlaceholderKind](./placeholder-kind.md) `| undefined`
- `sizes`: `string | undefined`

## Notes

Пользователь передаёт такие объекты в [PresetMap](./preset-map.md) внутри [ImgxPluginOptions](./imgx-plugin-options.md). Затем [resolvePreset](../functions/resolve-preset.md) превращает их в [ImagePreset](./image-preset.md).

## See also

- [ImagePreset](./image-preset.md)
- [PresetMap](./preset-map.md)
- [defaultPresets](../constants/default-presets.md)
