# Troubleshooting

## Sidebar пустой

Проверьте:

- корректен ли `folderPath` у [Documentation](../api/components/documentation.md);
- существует ли папка docs на стороне Vite-приложения;
- есть ли внутри docs хотя бы одна версия формата `x.y.z`.

## Вместо контента отображается список ошибок структуры

Это означает, что validator нашёл конфликтующую структуру. Частые причины:

- обычный `.md` лежит прямо в корне версии;
- `.button.md` лежит не в корне версии и не в языковой папке;
- внутри обычного dropdown есть вложенная папка;
- в корне docs есть не-version директория.

Исправьте структуру файлов, а не props [Documentation](../api/components/documentation.md).

## Поиск не находит страницу

Проверьте:

- включён ли `useSearch`;
- не помечена ли страница как `searchable: false` в `_meta.json`;
- находится ли искомый текст в первых 10000 символах markdown-файла;
- является ли сущность страницей, а не button/group/dropdown.

## Изменения title и order в frontmatter страницы не влияют на sidebar

Текущее чтение metadata это не подтверждает. Используйте `<version>/_meta.json`.

## Builder открывается, но операции завершаются ошибкой

Builder endpoint'ы доступны только в dev-режиме. В preview/production нужно ожидать недоступность builder API.

## После переключения версии не работают breadcrumbs или prev/next

В коде есть несинхронизированное состояние выбранной версии между sidebar и родительским компонентом. Это известная важная проблема; текущую документацию не следует читать как гарантию корректной совместной работы `versionSelect`, `useBreadcrumbs` и `usePrevNext` после ручного переключения версии.

## `route` не меняет endpoint'ы plugin

Это ожидаемое поведение текущей реализации: значение `route` объявлено, но не применяется. Используйте стандартные пути plugin или правьте код.

## `markdown.allowHtml` и `markdown.tocDepth` ничего не меняют

Эти поля объявлены в prop type, но не подключены в [Documentation](../api/components/documentation.md). Их нельзя считать рабочими настройками текущей версии пакета.

## See also

- [Configuration](../configuration.md)
- [FAQ](../faq.md)
- [dockRushScannerPlugin](../api/functions/dock-rush-scanner-plugin.md)

