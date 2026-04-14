# createAssetModuleCode

Генерирует текст JS-модуля с сериализованным [ImageAsset](../types/image-asset.md).

## Назначение

Функция превращает объект ассета в строку вида `const asset = ...; export default asset;`.

## Signature

```ts
function createAssetModuleCode(asset: ImageAsset): string;
```

## Parameters

- `asset`: [ImageAsset](../types/image-asset.md)

## Returns

`string`

## Throws

Явных исключений нет.

## Usage Notes

Функция используется в [ImageRushPlugin](./image-rush-plugin.md) как итоговый `load()`-результат для модуля с `?imgx`.

## Example

```ts
const code = createAssetModuleCode(asset);
```

## See also

- [ImageAsset](../types/image-asset.md)
- [ImageRushPlugin](./image-rush-plugin.md)
