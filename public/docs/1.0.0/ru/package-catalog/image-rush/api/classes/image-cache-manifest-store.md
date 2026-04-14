# ImageCacheManifestStore

Хранилище manifest-кэша для [ImageAsset](../types/image-asset.md).

## Назначение

Класс загружает, хранит в памяти, проверяет и сохраняет manifest-файл, который использует [buildImageAsset](../functions/build-image-asset.md).

## Constructor

```ts
class ImageCacheManifestStore {
  constructor(manifestPath: string);
}
```

## Methods

- `load(): Promise<void>` — читает manifest или инициализирует пустое состояние
- `get(key: string): CacheEntry | undefined` — возвращает запись по ключу
- `set(entry: CacheEntry): void` — сохраняет запись в памяти
- `isEntryUsable(entry: CacheEntry): Promise<boolean>` — проверяет существование всех `generatedFiles`
- `save(): Promise<void>` — пишет manifest на диск через временный файл

## Properties

Публичные свойства не экспортируются.

## Usage Notes

- Версия manifest жёстко зафиксирована как `1`
- При ошибке чтения или несовместимой структуре manifest заменяется пустым состоянием
- Прямой публичный тип `CacheEntry` не экспортируется

## Example

```ts
const store = new ImageCacheManifestStore('.imgr-cache/manifest.json');
await store.load();
await store.save();
```

## See also

- [buildImageAsset](../functions/build-image-asset.md)
- [createFileHash](../functions/create-file-hash.md)
- [createPresetHash](../functions/create-preset-hash.md)
