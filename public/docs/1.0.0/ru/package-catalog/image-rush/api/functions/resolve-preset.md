# resolvePreset

Нормализует и валидирует preset по имени.

## Назначение

Функция получает имя preset, карту [PresetMap](../types/preset-map.md), опциональные [PresetOverrides](../types/preset-overrides.md) и флаг `allowQueryOverrides`, после чего возвращает готовый [ImagePreset](../types/image-preset.md).

## Signature

```ts
function resolvePreset(
  presetName: string,
  presets: PresetMap,
  overrides?: PresetOverrides,
  allowQueryOverrides?: boolean
): ImagePreset;
```

## Parameters

- `presetName`: имя preset
- `presets`: [PresetMap](../types/preset-map.md)
- `overrides`: [PresetOverrides](../types/preset-overrides.md)
- `allowQueryOverrides`: `boolean`, по умолчанию `false`

## Returns

[ImagePreset](../types/image-preset.md)

## Throws

- [ImgrConfigError](../classes/imgr-config-error.md), если preset не найден
- [ImgrConfigError](../classes/imgr-config-error.md), если после нормализации нет валидных ширин
- [ImgrConfigError](../classes/imgr-config-error.md), если ширин больше 12
- [ImgrConfigError](../classes/imgr-config-error.md), если нет форматов
- [ImgrConfigError](../classes/imgr-config-error.md), если quality выходит за диапазон `1..100`

## Usage Notes

- Ширины очищаются, округляются, дедуплицируются и сортируются
- Форматы дедуплицируются без дополнительной валидации списка допустимых строк
- Переопределения `widths`, `formats`, `placeholder`, `sizes` применяются только при `allowQueryOverrides: true`

## Example

```ts
const preset = resolvePreset('card', defaultPresets);
```

## See also

- [ImagePreset](../types/image-preset.md)
- [PresetMap](../types/preset-map.md)
- [PresetOverrides](../types/preset-overrides.md)
- [defaultPresets](../constants/default-presets.md)
