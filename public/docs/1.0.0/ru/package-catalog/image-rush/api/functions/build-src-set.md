# buildSrcSet

Строит строку `srcset` из массива [ImageCandidate](../types/image-candidate.md).

## Назначение

Функция сортирует кандидатов по ширине и соединяет их в строку вида `url widthw`.

## Signature

```ts
function buildSrcSet(candidates: ImageCandidate[]): string;
```

## Parameters

- `candidates`: массив [ImageCandidate](../types/image-candidate.md)

## Returns

`string`

## Throws

Явных исключений нет.

## Usage Notes

Компонент [ImageRush](../components/image-rush.md) вызывает эту функцию для каждого набора `image.sources`.

## Example

```ts
const srcSet = buildSrcSet([
  { url: '/hero-320.webp', width: 320, height: 180, format: 'webp' },
  { url: '/hero-640.webp', width: 640, height: 360, format: 'webp' },
]);
```

## See also

- [ImageCandidate](../types/image-candidate.md)
- [ImageRush](../components/image-rush.md)
