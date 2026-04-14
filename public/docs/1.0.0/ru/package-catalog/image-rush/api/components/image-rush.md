# ImageRush

Основной React-компонент пакета для рендера [ImageAsset](../types/image-asset.md).

## Назначение

Компонент принимает [ImageRushProps](../types/image-rush-props.md), рендерит `picture` и `img`, формирует `srcset` через [buildSrcSet](../functions/build-src-set.md) и показывает [PlaceholderLayer](./placeholder-layer.md), пока изображение не загрузилось.

## Signature

```tsx
function ImageRush(props: ImageRushProps): JSX.Element;
```

## Parameters

- `props`: [ImageRushProps](../types/image-rush-props.md)

## Returns

`JSX.Element`

## Usage Notes

- Обёртка рендерится как `span`
- `sizes` берётся из `props.sizes`, затем из `image.sizes`, затем из `'100vw'`
- Fallback-изображение использует `image.fallback.url`
- Внутреннее состояние `isLoaded` обновляется в `onLoad`

## Example

```tsx
import { ImageRush } from '@da_b1rmuda/image-rush/react';
import heroAsset from './assets/hero.jpg?imgx&preset=hero';

export function Hero() {
  return <ImageRush image={heroAsset} alt="Hero" sizes="100vw" fetchPriority="high" />;
}
```

## See also

- [ImageRushProps](../types/image-rush-props.md)
- [ImageAsset](../types/image-asset.md)
- [PlaceholderLayer](./placeholder-layer.md)
