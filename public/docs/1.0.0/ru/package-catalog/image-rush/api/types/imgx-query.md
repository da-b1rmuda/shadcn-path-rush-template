# ImgxQuery

Нормализованное представление import query для `?imgx`.

## Definition

```ts
type ImgxQuery = {
  preset?: string;
  widths?: number[];
  formats?: ImageFormat[];
  placeholder?: 'blur' | 'color' | 'none';
  sizes?: string;
};
```

## Fields

- `preset`: `string | undefined`
- `widths`: `number[] | undefined`
- `formats`: [ImageFormat](./image-format.md)`[] | undefined`
- `placeholder`: `'blur' | 'color' | 'none' | undefined`
- `sizes`: `string | undefined`

## Notes

`imgx` как флаг не входит в итоговый объект, но обязателен для распознавания импорта плагином.

## See also

- [ImgxPluginOptions](./imgx-plugin-options.md)
- [PresetOverrides](./preset-overrides.md)
- [ImageRushPlugin](../functions/image-rush-plugin.md)
