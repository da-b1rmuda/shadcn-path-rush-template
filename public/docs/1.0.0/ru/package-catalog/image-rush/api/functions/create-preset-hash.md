# createPresetHash

Считает SHA-1 хэш рабочего [ImagePreset](../types/image-preset.md).

## Назначение

Функция сериализует `name`, `widths`, `formats`, нормализованный `quality`, `placeholder` и `sizes`, затем возвращает SHA-1 этого объекта.

## Signature

```ts
function createPresetHash(preset: ImagePreset): string;
```

## Parameters

- `preset`: [ImagePreset](../types/image-preset.md)

## Returns

`string`

## Throws

Явных исключений нет.

## Usage Notes

Функция используется вместе с [createFileHash](./create-file-hash.md) для построения ключа manifest-кэша.

## Example

```ts
const hash = createPresetHash(resolvePreset('card', defaultPresets));
```

## See also

- [ImagePreset](../types/image-preset.md)
- [resolvePreset](./resolve-preset.md)
- [defaultPresets](../constants/default-presets.md)
