# buildServerImageUrl

Короткий адаптер над `builder.build()` для [ServerImageRequest](../types/server-image-request.md).

## Назначение

Функция принимает объект, реализующий [ServerUrlBuilder](../types/server-url-builder.md), и запрос [ServerImageRequest](../types/server-image-request.md), затем возвращает результат вызова `builder.build(request)`.

## Signature

```ts
function buildServerImageUrl(
  builder: ServerUrlBuilder,
  request: ServerImageRequest
): string;
```

## Parameters

- `builder`: [ServerUrlBuilder](../types/server-url-builder.md)
- `request`: [ServerImageRequest](../types/server-image-request.md)

## Returns

`string` — URL, который вернул `builder.build(request)`.

## Throws

Специальные ошибки в реализации не добавляются. Функция может пробросить исключение из `builder.build()`.

## Usage Notes

Функция не модифицирует запрос и не добавляет дополнительной логики поверх вызова builder.

## Example

```ts
const url = buildServerImageUrl(
  {
    build(request) {
      return `/images/${request.width}.${request.format}?src=${encodeURIComponent(request.src)}`;
    },
  },
  { src: '/hero.jpg', width: 640, format: 'webp' }
);
```

## See also

- [ServerImageRequest](../types/server-image-request.md)
- [ServerUrlBuilder](../types/server-url-builder.md)
