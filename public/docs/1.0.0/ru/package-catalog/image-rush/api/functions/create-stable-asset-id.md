# createStableAssetId

Создаёт стабильный идентификатор ассета по пути файла и preset.

## Назначение

Функция берёт basename исходного файла, нормализует его до lowercase slug и добавляет 10-символьный фрагмент SHA-1 от `filePath|presetSignature`.

## Signature

```ts
function createStableAssetId(filePath: string, preset: ImagePreset): string;
```

## Parameters

- `filePath`: путь к исходному файлу
- `preset`: [ImagePreset](../types/image-preset.md)

## Returns

`string`

## Throws

Явных исключений нет.

## Usage Notes

ID зависит от пути файла и содержимого preset, но не от хэша содержимого самого файла.

## Example

```ts
const id = createStableAssetId('src/assets/hero.jpg', resolvePreset('hero', defaultPresets));
```

## See also

- [ImagePreset](../types/image-preset.md)
- [createOutputFileName](./create-output-file-name.md)
