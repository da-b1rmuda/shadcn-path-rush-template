# Overview

## Назначение

Пакет решает две связанные задачи:

- на клиенте рендерит markdown-документацию через [Documentation](./api/components/documentation.md);
- на стороне Vite dev/preview server сканирует папку с документацией через [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md).

## Подтверждённые возможности

- версии документации по папкам `x.y.z`;
- опциональные языковые подпапки из двух строчных букв;
- sidebar navigation с page, group, dropdown и button сущностями;
- hash-routing по выбранной странице;
- поиск по заголовкам, путям и содержимому страниц;
- TOC, breadcrumbs и prev/next navigation;
- footer и набор header links;
- dev-only builder UI;
- markdown-рендеринг с GFM, code blocks, tables, relative image paths и перехватом ссылок на другие `.md`.

## Точки входа

- `@da_b1rmuda/dock-rush` и `@da_b1rmuda/dock-rush/client` экспортируют [Documentation](./api/components/documentation.md).
- `@da_b1rmuda/dock-rush/plugin` и `@da_b1rmuda/dock-rush/server` экспортируют [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md), [FolderScanner](./api/classes/folder-scanner.md), [ConsoleLogger](./api/classes/console-logger.md) и серверные типы.
- `@da_b1rmuda/dock-rush/style.css` экспортирует stylesheet пакета.

## Реальная структура репозитория

- `plugin/` — библиотека, которая публикуется как npm package.
- `template/` — локальный пример приложения, подключающий пакет через `link:..\\plugin`.

## Ограничения

- Обычные `.md` в корне версии validator считает ошибкой; в корне версии допускаются только `.button.md`.
- Metadata страниц для навигации подтверждённо читаются из `<version>/_meta.json`.
- `group-settings.md` и `dropdown-settings.md` подтверждены как рабочие settings-файлы для папок.
- `version-settings.md`, `language-settings.md` и page frontmatter не следует считать рабочими источниками navigation metadata без правки кода.

## Куда идти дальше

- Для установки откройте [installation.md](./installation.md).
- Для списка props и структуры папки docs откройте [configuration.md](./configuration.md).
- Для полного reference откройте [api/index.md](./api/index.md).

