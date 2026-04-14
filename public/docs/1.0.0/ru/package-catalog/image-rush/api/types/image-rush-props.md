# ImageRushProps

Props компонента [ImageRush](../components/image-rush.md).

## Definition

```ts
type ImageRushProps = {
  image: ImageAsset;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
  style?: CSSProperties;
  imgStyle?: CSSProperties;
  onLoad?: ImgHTMLAttributes<HTMLImageElement>['onLoad'];
};
```

## Fields

- `image`: [ImageAsset](./image-asset.md)
- `alt`: `string`
- `className`: `string | undefined`
- `imgClassName`: `string | undefined`
- `sizes`: `string | undefined`
- `loading`: `'lazy' | 'eager' | undefined`
- `decoding`: `'async' | 'sync' | 'auto' | undefined`
- `fetchPriority`: `'high' | 'low' | 'auto' | undefined`
- `objectFit`: `CSSProperties['objectFit'] | undefined`
- `objectPosition`: `CSSProperties['objectPosition'] | undefined`
- `style`: `CSSProperties | undefined`
- `imgStyle`: `CSSProperties | undefined`
- `onLoad`: `ImgHTMLAttributes<HTMLImageElement>['onLoad'] | undefined`

## Notes

Значения по умолчанию реализованы в компоненте [ImageRush](../components/image-rush.md): `loading='lazy'`, `decoding='async'`, `fetchPriority='auto'`.

## See also

- [ImageRush](../components/image-rush.md)
- [SmartImageProps](./smart-image-props.md)
- [ImageAsset](./image-asset.md)
