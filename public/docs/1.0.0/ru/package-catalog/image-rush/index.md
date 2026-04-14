# @da_b1rmuda/image-rush

`@da_b1rmuda/image-rush` — пакет для build-time обработки изображений в Vite и последующего рендера результата в React. Публичная модель данных строится вокруг [ImageAsset](./api/types/image-asset.md), сборка запускается через [ImageRushPlugin](./api/functions/image-rush-plugin.md), а рендер выполняется компонентом [ImageRush](./api/components/image-rush.md).

## Что входит в пакет

- Vite-плагин [ImageRushPlugin](./api/functions/image-rush-plugin.md) и alias [imgxPlugin](./api/functions/imgx-plugin.md)
- React-компоненты [ImageRush](./api/components/image-rush.md), [PlaceholderLayer](./api/components/placeholder-layer.md) и alias [SmartImage](./api/components/smart-image.md)
- Контракты [ImageAsset](./api/types/image-asset.md), [ImageCandidate](./api/types/image-candidate.md), [ImageSourceSet](./api/types/image-source-set.md) и [Placeholder](./api/types/placeholder.md)
- Core-утилиты, включая [resolvePreset](./api/functions/resolve-preset.md), [buildSrcSet](./api/functions/build-src-set.md) и [defaultPresets](./api/constants/default-presets.md)
- Sharp-based pipeline через [SharpImageProcessor](./api/classes/sharp-image-processor.md)

## С чего начать

1. Прочитайте [overview.md](./overview.md), чтобы понять entry points и границы публичного API.
2. Перейдите в [installation.md](./installation.md) и [quick-start.md](./quick-start.md) для минимальной интеграции.
3. Используйте [configuration.md](./configuration.md), если нужно настроить presets, кэш, диагностику или типизацию.
4. Для подробного reference откройте [api/index.md](./api/index.md).

## Ключевые сущности

- [ImageRushPlugin](./api/functions/image-rush-plugin.md)
- [ImgxPluginOptions](./api/types/imgx-plugin-options.md)
- [ImageAsset](./api/types/image-asset.md)
- [ImageRush](./api/components/image-rush.md)
- [defaultPresets](./api/constants/default-presets.md)
- [SharpImageProcessor](./api/classes/sharp-image-processor.md)

## Навигация

- Обзор: [overview.md](./overview.md)
- Установка: [installation.md](./installation.md)
- Конфигурация: [configuration.md](./configuration.md)
- Быстрый старт: [quick-start.md](./quick-start.md)
- Guides: [guides/basic-usage.md](./guides/basic-usage.md), [guides/common-cases.md](./guides/common-cases.md), [guides/troubleshooting.md](./guides/troubleshooting.md)
- Examples: [examples/basic-example.md](./examples/basic-example.md), [examples/advanced-example.md](./examples/advanced-example.md)
- API reference: [api/index.md](./api/index.md)
