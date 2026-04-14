# ServerImageRequest

Контракт запроса для server-side URL builder API.

## Definition

```ts
type ServerImageRequest = {
  src: string;
  width: number;
  format: ImageFormat;
  quality?: number;
};
```

## Fields

- `src`: `string`
  Исходный путь или идентификатор изображения
- `width`: `number`
  Требуемая ширина
- `format`: [ImageFormat](./image-format.md)
- `quality`: `number | undefined`
  Качество, если нужно передать его builder-у

## Notes

Тип используется вместе с [ServerUrlBuilder](./server-url-builder.md) и [buildServerImageUrl](../functions/build-server-image-url.md).

## See also

- [ServerUrlBuilder](./server-url-builder.md)
- [buildServerImageUrl](../functions/build-server-image-url.md)
