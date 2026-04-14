# PlaceholderLayer

React-компонент для отображения placeholder поверх изображения.

## Назначение

Компонент принимает [PlaceholderLayerProps](../types/placeholder-layer-props.md) и рисует `span` c CSS-оформлением для `color` или `blur`. При `visible: false` и при `placeholder.kind === 'none'` компонент возвращает `null`.

## Signature

```tsx
function PlaceholderLayer(props: PlaceholderLayerProps): JSX.Element | null;
```

## Parameters

- `props`: [PlaceholderLayerProps](../types/placeholder-layer-props.md)

## Returns

`JSX.Element | null`

## Usage Notes

Компонент используется внутри [ImageRush](./image-rush.md). Для blur-placeholder он применяет `backgroundImage`, `filter: 'blur(14px)'` и `transform: 'scale(1.03)'`.

## Example

```tsx
<PlaceholderLayer placeholder={{ kind: 'color', color: 'rgb(120, 120, 120)' }} visible={true} />
```

## See also

- [PlaceholderLayerProps](../types/placeholder-layer-props.md)
- [Placeholder](../types/placeholder.md)
- [ImageRush](./image-rush.md)
