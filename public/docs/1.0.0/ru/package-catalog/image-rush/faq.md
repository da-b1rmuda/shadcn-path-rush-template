# FAQ

## Пакет оптимизирует изображения на сервере по запросу?

Нет. Подтверждённая реализация строится вокруг build-time обработки через [ImageRushPlugin](./api/functions/image-rush-plugin.md) и [SharpImageProcessor](./api/classes/sharp-image-processor.md). Отдельного on-demand image server в репозитории нет.

## Query-переопределения работают всегда?

Нет. Параметры `widths`, `formats`, `placeholder` и `sizes` применяются только при `allowQueryOverrides: true` в [ImgxPluginOptions](./api/types/imgx-plugin-options.md). Иначе плагин выдаёт диагностическое событие `IMGR_QUERY_OVERRIDES_IGNORED`.

## Что именно возвращает импорт с `?imgx`?

Импорт возвращает [ImageAsset](./api/types/image-asset.md). В него входят `fallback`, `sources`, `placeholder` и `metadata`.

## Как подключить типизацию `?imgx` импортов?

Либо добавьте `@da_b1rmuda/image-rush/types` в `compilerOptions.types`, либо включите `types.autoGenerate` в [ImgxPluginOptions](./api/types/imgx-plugin-options.md). Реализацию автогенерации выполняет [ImgxTypeDeclarationWriter](./api/classes/imgx-type-declaration-writer.md).

## Что происходит, если preset содержит ширины больше исходного изображения?

[SharpImageProcessor](./api/classes/sharp-image-processor.md) отбрасывает ширины, превышающие оригинальную. Если после фильтрации ничего не остаётся, используется исходная ширина изображения.

## Можно ли импортировать API из корневого пакета?

Да. Корневой entry point `@da_b1rmuda/image-rush` реэкспортирует публичные сущности из `contracts`, `core`, `react` и `vite`. В примерах репозитория чаще используются subpath-импорты.
