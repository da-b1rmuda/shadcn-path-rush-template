# Placeholder

Контракт placeholder-данных для изображения.

## Definition

```ts
type Placeholder =
  | { kind: 'none' }
  | { kind: 'blur'; dataUrl: string }
  | { kind: 'color'; color: string };
```

## Fields

- `kind`
  Значения: `'none' | 'blur' | 'color'`
- `dataUrl`
  Есть только у варианта `kind: 'blur'`
- `color`
  Есть только у варианта `kind: 'color'`

## Notes

Тип экспортируется как [Placeholder](./placeholder.md). Имя `ImagePlaceholder` в существующих текстовых материалах не подтверждено кодом.

## See also

- [ImageAsset](./image-asset.md)
- [PlaceholderLayerProps](./placeholder-layer-props.md)
- [createBlurPlaceholder](../functions/create-blur-placeholder.md)
