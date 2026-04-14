# createFileHash

Считает SHA-1 хэш содержимого файла.

## Назначение

Функция читает файл целиком и возвращает шестнадцатеричное представление SHA-1.

## Signature

```ts
function createFileHash(filePath: string): Promise<string>;
```

## Parameters

- `filePath`: путь к файлу

## Returns

`Promise<string>`

## Throws

Может пробросить ошибку файловой системы при чтении файла.

## Usage Notes

Функция используется в [buildImageAsset](./build-image-asset.md) для построения ключа manifest-кэша.

## Example

```ts
const hash = await createFileHash('src/assets/hero.jpg');
```

## See also

- [ImageCacheManifestStore](../classes/image-cache-manifest-store.md)
- [createPresetHash](./create-preset-hash.md)
