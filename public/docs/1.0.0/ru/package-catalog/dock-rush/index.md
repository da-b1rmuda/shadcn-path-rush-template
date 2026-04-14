# @da_b1rmuda/dock-rush

`@da_b1rmuda/dock-rush` — пакет для отображения markdown-документации в React-приложении и Vite plugin, который сканирует файловую структуру документации и обслуживает данные для UI.

## Что входит в пакет

- React-компонент [Documentation](./api/components/documentation.md)
- Vite plugin [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md)
- серверные утилиты [FolderScanner](./api/classes/folder-scanner.md) и [ConsoleLogger](./api/classes/console-logger.md)
- типы [DockRushScannerPluginOptions](./api/types/dock-rush-scanner-plugin-options.md), [ScanOptions](./api/types/scan-options.md), [FileInfo](./api/types/file-info.md), [FileMetadata](./api/types/file-metadata.md), [ScanResult](./api/types/scan-result.md) и [ConsoleFormat](./api/types/console-format.md)

## С чего начать

1. Прочитайте [overview.md](./overview.md), чтобы понять назначение пакета и его ограничения.
2. Выполните шаги из [installation.md](./installation.md).
3. Воспроизведите минимальный сценарий из [quick-start.md](./quick-start.md).
4. Для параметров интеграции откройте [configuration.md](./configuration.md).

## Ключевые ссылки

- [API catalog](./api/index.md)
- [Guides](./guides/basic-usage.md)
- [Examples](./examples/basic-example.md)
- [Troubleshooting](./guides/troubleshooting.md)

## Что важно знать заранее

- Пакет рассчитан на сценарий с Vite plugin. Компонент [Documentation](./api/components/documentation.md) обращается к `/api/dock-rush-scan` и `/api/dock-rush-markdown`, которые поднимает [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md).
- Версии документации определяются по папкам формата `x.y.z`.
- Языковые папки опциональны, но если они есть, код ожидает двухбуквенные имена вроде `en` и `ru`.
- Навигационные metadata страниц читаются из `<version>/_meta.json`; page frontmatter не следует считать подтверждённым источником navigation metadata.

