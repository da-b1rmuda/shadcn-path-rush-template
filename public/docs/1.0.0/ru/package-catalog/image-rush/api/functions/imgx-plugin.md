# imgxPlugin

Backward-compatible alias для [ImageRushPlugin](./image-rush-plugin.md).

## Назначение

Экспорт указывает на ту же функцию, что и [ImageRushPlugin](./image-rush-plugin.md).

## Signature

```ts
const imgxPlugin: typeof ImageRushPlugin;
```

## Parameters

Параметры полностью совпадают с [ImageRushPlugin](./image-rush-plugin.md).

## Returns

Возвращаемое значение полностью совпадает с [ImageRushPlugin](./image-rush-plugin.md).

## Throws

Совпадает с [ImageRushPlugin](./image-rush-plugin.md).

## Usage Notes

В комментарии к коду alias помечен как backward-compatible и содержит пометку о будущем удалении в мажорной версии.

## Example

```ts
import { imgxPlugin } from '@da_b1rmuda/image-rush/vite';

export default {
  plugins: [imgxPlugin()],
};
```

## See also

- [ImageRushPlugin](./image-rush-plugin.md)
- [ImgxPluginOptions](../types/imgx-plugin-options.md)
