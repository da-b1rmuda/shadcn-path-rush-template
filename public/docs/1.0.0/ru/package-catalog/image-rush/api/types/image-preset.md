# ImagePreset

Нормализованный рабочий preset.

## Definition

```ts
type ImagePreset = {
  name: string;
  widths: number[];
  formats: ImageFormat[];
  quality: Partial<Record<ImageFormat, number>>;
  placeholder: PlaceholderKind;
  sizes?: string;
};
```

## Fields

- `name`: `string`
- `widths`: `number[]`
- `formats`: [ImageFormat](./image-format.md)`[]`
- `quality`: `Partial<Record<ImageFormat, number>>`
- `placeholder`: [PlaceholderKind](./placeholder-kind.md)
- `sizes`: `string | undefined`

## Notes

Тип возвращает [resolvePreset](../functions/resolve-preset.md) и использует [SharpImageProcessor](../classes/sharp-image-processor.md).

## See also

- [ImagePresetConfig](./image-preset-config.md)
- [PresetMap](./preset-map.md)
- [resolvePreset](../functions/resolve-preset.md)
