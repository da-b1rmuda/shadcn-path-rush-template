# API Reference

## Как читать reference

- Используйте эту страницу как каталог публичного API.
- Каждая экспортируемая сущность имеет собственную страницу.
- Корневой entry point `@da_b1rmuda/image-rush` реэкспортирует сущности из `contracts`, `core`, `react` и `vite`.

## Entry points

- `@da_b1rmuda/image-rush`
- `@da_b1rmuda/image-rush/contracts`
- `@da_b1rmuda/image-rush/core`
- `@da_b1rmuda/image-rush/pipeline-sharp`
- `@da_b1rmuda/image-rush/vite`
- `@da_b1rmuda/image-rush/react`
- `@da_b1rmuda/image-rush/types`

## Functions

- [buildServerImageUrl](./functions/build-server-image-url.md) — вызывает `builder.build()` для [ServerImageRequest](./types/server-image-request.md)
- [pickFallbackFromSources](./functions/pick-fallback-from-sources.md) — выбирает fallback-кандидат из [ImageSourceSet](./types/image-source-set.md)
- [normalizeImageAsset](./functions/normalize-image-asset.md) — собирает [ImageAsset](./types/image-asset.md) из входа и результата процессора
- [resolvePreset](./functions/resolve-preset.md) — нормализует и валидирует [ImagePreset](./types/image-preset.md)
- [buildSrcSet](./functions/build-src-set.md) — строит строку `srcset` из [ImageCandidate](./types/image-candidate.md)
- [buildImageAsset](./functions/build-image-asset.md) — основной helper Vite-пайплайна
- [createFileHash](./functions/create-file-hash.md) — считает SHA-1 хэш файла
- [createPresetHash](./functions/create-preset-hash.md) — считает SHA-1 хэш [ImagePreset](./types/image-preset.md)
- [createAssetModuleCode](./functions/create-asset-module-code.md) — генерирует код модуля с сериализованным [ImageAsset](./types/image-asset.md)
- [ImageRushPlugin](./functions/image-rush-plugin.md) — создаёт Vite plugin instance
- [imgxPlugin](./functions/imgx-plugin.md) — backward-compatible alias для [ImageRushPlugin](./functions/image-rush-plugin.md)
- [loadSharp](./functions/load-sharp.md) — лениво импортирует `sharp`
- [createStableAssetId](./functions/create-stable-asset-id.md) — строит стабильный ID ассета
- [createOutputFileName](./functions/create-output-file-name.md) — строит имя выходного файла
- [createBlurPlaceholder](./functions/create-blur-placeholder.md) — создаёт blur placeholder
- [createColorPlaceholder](./functions/create-color-placeholder.md) — создаёт color placeholder

## Classes

- [ImgrConfigError](./classes/imgr-config-error.md)
- [ImgrProcessingError](./classes/imgr-processing-error.md)
- [ImageCacheManifestStore](./classes/image-cache-manifest-store.md)
- [ImgxTypeDeclarationWriter](./classes/imgx-type-declaration-writer.md)
- [SharpImageProcessor](./classes/sharp-image-processor.md)

## Types

- [ImageFormat](./types/image-format.md)
- [Placeholder](./types/placeholder.md)
- [ImageCandidate](./types/image-candidate.md)
- [ImageSourceSet](./types/image-source-set.md)
- [ImageAsset](./types/image-asset.md)
- [ServerImageRequest](./types/server-image-request.md)
- [ServerUrlBuilder](./types/server-url-builder.md)
- [BuildImageAssetInput](./types/build-image-asset-input.md)
- [GeneratedVariant](./types/generated-variant.md)
- [ProcessorOutput](./types/processor-output.md)
- [ImageProcessor](./types/image-processor.md)
- [PlaceholderKind](./types/placeholder-kind.md)
- [ImagePreset](./types/image-preset.md)
- [ImagePresetConfig](./types/image-preset-config.md)
- [PresetMap](./types/preset-map.md)
- [PresetOverrides](./types/preset-overrides.md)
- [ImgxQuery](./types/imgx-query.md)
- [ImgxPluginDiagnosticEvent](./types/imgx-plugin-diagnostic-event.md)
- [ImgxPluginOptions](./types/imgx-plugin-options.md)
- [ImageRushPluginOptions](./types/image-rush-plugin-options.md)
- [NormalizedPluginOptions](./types/normalized-plugin-options.md)
- [PlaceholderLayerProps](./types/placeholder-layer-props.md)
- [ImageRushProps](./types/image-rush-props.md)
- [SmartImageProps](./types/smart-image-props.md)
- [SharpProcessorOptions](./types/sharp-processor-options.md)

## Components

- [PlaceholderLayer](./components/placeholder-layer.md)
- [ImageRush](./components/image-rush.md)
- [SmartImage](./components/smart-image.md)

## Constants

- [defaultPresets](./constants/default-presets.md)
