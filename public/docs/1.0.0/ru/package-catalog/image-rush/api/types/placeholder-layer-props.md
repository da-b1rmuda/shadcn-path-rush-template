# PlaceholderLayerProps

Props компонента [PlaceholderLayer](../components/placeholder-layer.md).

## Definition

```ts
type PlaceholderLayerProps = {
  placeholder: Placeholder;
  visible: boolean;
};
```

## Fields

- `placeholder`: [Placeholder](./placeholder.md)
- `visible`: `boolean`

## Notes

Если `visible` равно `false` или `placeholder.kind === 'none'`, [PlaceholderLayer](../components/placeholder-layer.md) ничего не рендерит.

## See also

- [PlaceholderLayer](../components/placeholder-layer.md)
- [Placeholder](./placeholder.md)
