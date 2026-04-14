# FAQ

## Какой import считать основным

Для клиента используйте [Documentation](./api/components/documentation.md) из `@da_b1rmuda/dock-rush` или `@da_b1rmuda/dock-rush/client`. Для Vite используйте [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md) из `@da_b1rmuda/dock-rush/plugin` или `@da_b1rmuda/dock-rush/server`.

## Обязателен ли Vite plugin

Для подтверждённого сценария использования — да. [Documentation](./api/components/documentation.md) делает запросы к `/api/dock-rush-scan` и `/api/dock-rush-markdown`, которые поднимает [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md).

## Можно ли хранить страницы прямо в корне версии

Validator считает это ошибкой. В корне версии допускаются только `.button.md`; обычные страницы нужно помещать в языковую папку или в подкаталог.

## Откуда берутся title и order страниц

Подтверждённый источник — `<version>/_meta.json`. Если metadata отсутствуют, название страницы выводится из имени файла.

## Нужны ли языковые папки

Нет. Если языковые папки отсутствуют, структура может быть только версионной. Если они есть, код ожидает двухбуквенные имена вида `en` и `ru`.

## Нужно ли включать `includeContentForSearch`, если используется `useSearch`

Для встроенного поиска [Documentation](./api/components/documentation.md) это не обязательно: клиент уже добавляет `content=1` в scan request при `useSearch=true`. Опция [DockRushScannerPluginOptions](./api/types/dock-rush-scanner-plugin-options.md) полезна, если вам нужен content в scan response без этого query-параметра.

## Работает ли builder в production

Нет. При `useBuilder=true` UI-кнопка отображается, но builder endpoint'ы обслуживаются только в dev-режиме.

## Можно ли настроить route plugin через `route`

Тип [DockRushScannerPluginOptions](./api/types/dock-rush-scanner-plugin-options.md) это допускает, но текущая реализация не использует значение `route`. В коде зашиты стандартные endpoint'ы.

## Можно ли управлять заголовками страниц через frontmatter внутри `.md`

Это не подтверждено текущим серверным чтением metadata. Для navigation metadata используйте `<version>/_meta.json`.

## Работает ли `position: header` у `.button.md`

Текущее поведение это не подтверждает. Для header-иконок используйте prop `headerLinks` у [Documentation](./api/components/documentation.md).

