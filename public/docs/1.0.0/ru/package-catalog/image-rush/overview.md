# Overview

## Назначение пакета

Пакет решает задачу build-time подготовки изображений для Vite-проекта. Импорт с `?imgx` обрабатывается плагином [ImageRushPlugin](./api/functions/image-rush-plugin.md), на выходе формируется объект [ImageAsset](./api/types/image-asset.md), а в React он рендерится через [ImageRush](./api/components/image-rush.md).

## Что подтверждено кодом

- Обработка только импортов, содержащих `?imgx`
- Поддержка presets через [defaultPresets](./api/constants/default-presets.md) и пользовательскую карту [PresetMap](./api/types/preset-map.md)
- Генерация нескольких форматов и ширин через [SharpImageProcessor](./api/classes/sharp-image-processor.md) или кастомный [ImageProcessor](./api/types/image-processor.md)
- Формирование `srcset` через [buildSrcSet](./api/functions/build-src-set.md)
- Поддержка manifest-кэша через [ImageCacheManifestStore](./api/classes/image-cache-manifest-store.md)
- Автогенерация типовых деклараций через [ImgxTypeDeclarationWriter](./api/classes/imgx-type-declaration-writer.md)

## Публичные entry points

- `@da_b1rmuda/image-rush`
  Корневой экспорт. Реэкспортирует публичные сущности из `contracts`, `core`, `react` и `vite`.
- `@da_b1rmuda/image-rush/vite`
  Вход для Vite-плагина, его типов и служебных helper-классов.
- `@da_b1rmuda/image-rush/react`
  Вход для React-компонентов и их prop-типов.
- `@da_b1rmuda/image-rush/contracts`
  Вход для публичных контрактов ассета и серверного URL builder API.
- `@da_b1rmuda/image-rush/core`
  Вход для чистых helper-функций, ошибок, пресетов и портов процессора.
- `@da_b1rmuda/image-rush/pipeline-sharp`
  Вход для Sharp-based реализации процессора и вспомогательных функций.
- `@da_b1rmuda/image-rush/types`
  Декларации для модульных импортов `*?imgx*`.

## Основные сущности API

- [ImageRushPlugin](./api/functions/image-rush-plugin.md) принимает [ImgxPluginOptions](./api/types/imgx-plugin-options.md) и подключается в Vite как `enforce: 'pre'`.
- [ImageAsset](./api/types/image-asset.md) содержит размеры оригинала, placeholder, fallback-кандидат, набор `sources` и служебные метаданные.
- [ImageRush](./api/components/image-rush.md) рендерит `picture` и использует [PlaceholderLayer](./api/components/placeholder-layer.md) до события `onLoad`.
- [resolvePreset](./api/functions/resolve-preset.md) строит рабочий [ImagePreset](./api/types/image-preset.md) из [PresetMap](./api/types/preset-map.md) и возможных [PresetOverrides](./api/types/preset-overrides.md).

## Точка входа для нового разработчика

Для прикладного использования достаточно начать с [installation.md](./installation.md), затем пройти [quick-start.md](./quick-start.md) и при необходимости перейти в [configuration.md](./configuration.md). Для полного каталога API используется [api/index.md](./api/index.md).
