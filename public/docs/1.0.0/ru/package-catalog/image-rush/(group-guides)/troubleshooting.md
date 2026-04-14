# Troubleshooting

## Импорт с `?imgx` не обрабатывается

Проверьте два условия:

- [ImageRushPlugin](../api/functions/image-rush-plugin.md) подключён в Vite
- импорт действительно содержит параметр `imgx`

Без `imgx` функция разбора query возвращает `null`, и плагин не берёт модуль в работу.

## Query overrides игнорируются

Если в импорте переданы `widths`, `formats`, `placeholder` или `sizes`, а в [ImgxPluginOptions](../api/types/imgx-plugin-options.md) оставлено `allowQueryOverrides: false`, плагин выдаёт код `IMGR_QUERY_OVERRIDES_IGNORED`.

## Возникает конфигурационная ошибка

[resolvePreset](../api/functions/resolve-preset.md) выбрасывает [ImgrConfigError](../api/classes/imgr-config-error.md), если:

- preset не найден
- список ширин пустой после нормализации
- количество ширин превышает 12
- список форматов пустой
- quality выходит за диапазон `1..100`

## Ошибка связана с `sharp`

[loadSharp](../api/functions/load-sharp.md) выбрасывает [ImgrProcessingError](../api/classes/imgr-processing-error.md), если модуль `sharp` не удалось импортировать. Дополнительно [SharpImageProcessor](../api/classes/sharp-image-processor.md) выбрасывает [ImgrProcessingError](../api/classes/imgr-processing-error.md), если не удалось прочитать метаданные оригинального изображения.

## Кэш ведёт себя не так, как ожидалось

[ImageCacheManifestStore](../api/classes/image-cache-manifest-store.md) считает запись пригодной только если все `generatedFiles` физически существуют. Если файл удалён, ассет будет пересобран.

## TypeScript не видит типы `?imgx`

Подключите `@da_b1rmuda/image-rush/types` или включите `types.autoGenerate` в [ImgxPluginOptions](../api/types/imgx-plugin-options.md). В демо используется автогенерация файла `src/image-rush.auto.d.ts`.
