# PresetOverrides

Переопределения preset, применяемые из import query.

## Definition

```ts
type PresetOverrides = {
  widths?: number[];
  formats?: ImageFormat[];
  placeholder?: PlaceholderKind;
  sizes?: string;
};
```

## Fields

- `widths`: `number[] | undefined`
- `formats`: [ImageFormat](./image-format.md)`[] | undefined`
- `placeholder`: [PlaceholderKind](./placeholder-kind.md) `| undefined`
- `sizes`: `string | undefined`

## Notes

Параметры `PresetOverrides` применяются только при `allowQueryOverrides: true` в [resolvePreset](../functions/resolve-preset.md).

## See also

- [resolvePreset](../functions/resolve-preset.md)
- [ImgxQuery](./imgx-query.md)
- [ImagePreset](./image-preset.md)
