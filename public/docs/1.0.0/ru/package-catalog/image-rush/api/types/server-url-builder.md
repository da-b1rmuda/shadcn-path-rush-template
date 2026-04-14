# ServerUrlBuilder

Интерфейс builder-а, который строит URL по [ServerImageRequest](./server-image-request.md).

## Definition

```ts
interface ServerUrlBuilder {
  build(request: ServerImageRequest): string;
}
```

## Fields

- `build(request)`: принимает [ServerImageRequest](./server-image-request.md) и возвращает `string`

## Notes

Интерфейс используется функцией [buildServerImageUrl](../functions/build-server-image-url.md).

## See also

- [ServerImageRequest](./server-image-request.md)
- [buildServerImageUrl](../functions/build-server-image-url.md)
