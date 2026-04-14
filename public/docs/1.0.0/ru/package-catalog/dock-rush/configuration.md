# Configuration

## Vite plugin options

Опции относятся к [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md) и формально типизированы как [DockRushScannerPluginOptions](./api/types/dock-rush-scanner-plugin-options.md).

| Опция | Тип | Значение по умолчанию | Подтверждённое поведение |
| --- | --- | --- | --- |
| `root` | `string` | `server.config.root` или `process.cwd()` | Используется как корневая папка для разрешения `folderPath`. |
| `includeContentForSearch` | `boolean` | `false` | Добавляет содержимое markdown-файлов в scan response, даже если запрос не передал `content=1`. |
| `route` | `string` | объявлен в типе | В текущей реализации не применяется. Endpoint'ы зашиты в коде. |

## Props компонента Documentation

Ниже перечислены props, подтверждённые реализацией [Documentation](./api/components/documentation.md).

| Prop | Тип | Значение по умолчанию | Подтверждённое поведение |
| --- | --- | --- | --- |
| `title` | `string` | `'Documentation'` | Заголовок в sidebar. |
| `logo` | `React.ReactNode` | встроенный `Logo` | Логотип в sidebar header и fallback-экране. |
| `folderPath` | `string` | `'docs'` | Путь, который клиент передаёт scan и markdown endpoint'ам. |
| `useToggleTheme` | `boolean` | `false` | Включает theme toggle. |
| `useToggleLanguage` | `boolean` | `false` | Включает language selector при наличии языков. |
| `useSearch` | `boolean` | `false` | Включает поиск и добавляет `content=1` в scan request. |
| `versionSelect` | `boolean` | `false` | Включает selector версии в sidebar. |
| `showVersion` | `boolean` | `true` | Показывает текущую версию или selector версии. |
| `logTreeFiles` | `DocumentationConsoleLoggerConfig` | `{}` | Управляет console logging scan результата. |
| `useToc` | `boolean` | `false` | Показывает правую колонку TOC. |
| `headerLinks` | `HeaderLink[]` | `undefined` | Рендерит иконки ссылок в header. |
| `footer` | `React.ReactNode \| FooterConfig` | `undefined` | Добавляет footer под основным контентом. |
| `useBuilder` | `boolean` | `false` | Включает dev-only builder overlay. |
| `useBreadcrumbs` | `boolean` | `false` | Включает breadcrumbs над страницей. |
| `usePrevNext` | `boolean` | `false` | Показывает ссылки на предыдущую и следующую страницы. |

## Дополнительные формы prop-данных

### `logTreeFiles`

```ts
type DocumentationConsoleLoggerConfig = {
  console?: boolean
  consoleFormat?: 'tree' | 'list' | 'minimal'
  ignore?: string[]
}
```

### `headerLinks`

```ts
type HeaderLink = {
  type: 'github' | 'discord' | 'web' | 'twitter' | 'telegram' | 'npm' | 'gitea'
  href: string
  label?: string
  icon?: React.ComponentType<{ className?: string }>
}
```

### `footer`

```ts
type FooterConfig = {
  columns?: React.ReactNode
  bottomText?: React.ReactNode
  className?: string
}
```

## Формат папки документации

Подтверждённые правила структуры:

- Корень docs-папки должен содержать версии в формате `x.y.z`.
- Внутри версии могут быть языковые папки вида `en`, `ru`.
- Обычная страница — это `.md`.
- Кнопка навигации — это `*.button.md`.
- Group — папка вида `(group-...)`.
- Dropdown — обычная папка с markdown-файлами.
- Для group используется `group-settings.md`.
- Для dropdown используется `dropdown-settings.md`.
- Metadata страниц подтверждённо читаются из `<version>/_meta.json`.

## Пример рабочей структуры

```text
public/docs/
  2.3.3/
    _meta.json
    en/
      intro.md
      github.button.md
      (group-guides)/
        group-settings.md
        first-steps.md
    ru/
      intro.md
```

## Пример `_meta.json`

```json
{
  "en/intro.md": {
    "title": "Introduction",
    "order": 0,
    "searchable": true
  },
  "en/(group-guides)": {
    "title": "Guides",
    "order": 10
  }
}
```

## Явно проблемные или неподтверждённые настройки

- `route` объявлен, но фактически не меняет маршруты plugin.
- `markdown.allowHtml` и `markdown.tocDepth` объявлены в prop type, но `Documentation` их не использует.
- Page frontmatter не является подтверждённым источником navigation metadata.
- `version-settings.md` и `language-settings.md` не используются текущим кодом.
- Для `.button.md` поля `variant`, `style` и `position` не влияют на рендеринг так, как это описано в исходных текстах.

