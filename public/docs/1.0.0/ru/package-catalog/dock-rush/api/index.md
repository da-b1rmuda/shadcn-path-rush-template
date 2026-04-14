# API Reference

Этот раздел каталогизирует подтверждённый публичный API пакета `@da_b1rmuda/dock-rush`.

## Components

- [Documentation](./components/documentation.md) — клиентский React-компонент, который сканирует docs-дерево через plugin endpoint'ы и рендерит навигацию и markdown-контент.

## Functions

- [dockRushScannerPlugin](./functions/dock-rush-scanner-plugin.md) — Vite plugin, поднимающий scan/markdown/builder endpoint'ы и внедряющий stylesheet.

## Classes

- [ConsoleLogger](./classes/console-logger.md) — форматированный вывод структуры файлов в консоль.
- [FolderScanner](./classes/folder-scanner.md) — рекурсивное сканирование docs-папки и извлечение списка версий.

## Types

- [DockRushScannerPluginOptions](./types/dock-rush-scanner-plugin-options.md) — тип опций Vite plugin.
- [ConsoleFormat](./types/console-format.md) — формат логирования.
- [ScanOptions](./types/scan-options.md) — тип параметров сканирования.
- [FileInfo](./types/file-info.md) — описание одного элемента дерева файлов.
- [FileMetadata](./types/file-metadata.md) — metadata map для путей документации.
- [ScanResult](./types/scan-result.md) — результат сканирования.

## Entry Points

- `@da_b1rmuda/dock-rush`
- `@da_b1rmuda/dock-rush/client`
- `@da_b1rmuda/dock-rush/plugin`
- `@da_b1rmuda/dock-rush/server`
- `@da_b1rmuda/dock-rush/style.css`

