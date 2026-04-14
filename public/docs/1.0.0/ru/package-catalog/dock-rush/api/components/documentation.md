# Documentation

React-компонент для отображения markdown-документации, получаемой через scan и markdown endpoint'ы Vite plugin.

## Назначение

[Documentation](./documentation.md) сканирует docs-папку через [dockRushScannerPlugin](../functions/dock-rush-scanner-plugin.md), строит sidebar-структуру, загружает markdown по требованию и рендерит страницу документации в браузере.

## Signature

```ts
function Documentation(props: {
  title?: string
  useToggleTheme?: boolean
  useToggleLanguage?: boolean
  useSearch?: boolean
  logo?: React.ReactNode
  folderPath?: string
  logTreeFiles?: {
    console?: boolean
    consoleFormat?: 'tree' | 'list' | 'minimal'
    ignore?: string[]
  }
  versionSelect?: boolean
  showVersion?: boolean
  useToc?: boolean
  footer?: React.ReactNode | {
    columns?: React.ReactNode
    bottomText?: React.ReactNode
    className?: string
  }
  headerLinks?: Array<{
    type: 'github' | 'discord' | 'web' | 'twitter' | 'telegram' | 'npm' | 'gitea'
    href: string
    label?: string
    icon?: React.ComponentType<{ className?: string }>
  }>
  useBuilder?: boolean
  useBreadcrumbs?: boolean
  usePrevNext?: boolean
  markdown?: {
    allowHtml?: boolean
    tocDepth?: { min?: number; max?: number }
  }
}): JSX.Element
```

## Parameters

| Параметр | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `title` | `string` | нет | `'Documentation'` | Заголовок в sidebar. |
| `useToggleTheme` | `boolean` | нет | `false` | Включает theme toggle. |
| `useToggleLanguage` | `boolean` | нет | `false` | Включает language selector. |
| `useSearch` | `boolean` | нет | `false` | Включает поиск и content index запросом scan endpoint'а. |
| `logo` | `React.ReactNode` | нет | встроенный `Logo` | Логотип для sidebar и fallback-экрана. |
| `folderPath` | `string` | нет | `'docs'` | Путь к папке документации. |
| `logTreeFiles` | объект | нет | `{}` | Управляет console logging scan результата. |
| `versionSelect` | `boolean` | нет | `false` | Показывает selector версии. |
| `showVersion` | `boolean` | нет | `true` | Показывает текущую версию или selector. |
| `useToc` | `boolean` | нет | `false` | Показывает TOC в правой колонке. |
| `footer` | `React.ReactNode \| FooterConfig` | нет | `undefined` | Добавляет footer. |
| `headerLinks` | `HeaderLink[]` | нет | `undefined` | Добавляет иконки ссылок в header. |
| `useBuilder` | `boolean` | нет | `false` | Открывает dev-only builder overlay. |
| `useBreadcrumbs` | `boolean` | нет | `false` | Показывает breadcrumbs. |
| `usePrevNext` | `boolean` | нет | `false` | Показывает prev/next навигацию. |
| `markdown` | объект | нет | `undefined` | Поле объявлено в prop type, но текущая реализация его не читает. |

## Returns

React element, который:

- делает `fetch` к `/api/dock-rush-scan`;
- строит структуру документации по scan response;
- загружает выбранную страницу через `/api/dock-rush-markdown`;
- синхронизирует выбранную страницу с `window.location.hash`.

## Throws

Синхронно подтверждённые исключения не документированы. Ошибки загрузки отображаются в UI как error state или как список ошибок структуры документации.

## Usage Notes

- Для рабочего сценария требуется [dockRushScannerPlugin](../functions/dock-rush-scanner-plugin.md).
- Выбранный язык хранится в `localStorage`.
- Выбранная версия также сохраняется в `localStorage` по ключу, зависящему от `folderPath`.
- Builder API доступен только в dev-режиме.
- `markdown.allowHtml` и `markdown.tocDepth` не следует считать рабочими публичными настройками текущей реализации.

## Example

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'

export default function App() {
  return (
    <Documentation
      title='Project Docs'
      folderPath='./public/docs'
      versionSelect
      useToggleLanguage
      useSearch
      useToc
    />
  )
}
```

## See also

- [dockRushScannerPlugin](../functions/dock-rush-scanner-plugin.md)
- [DockRushScannerPluginOptions](../types/dock-rush-scanner-plugin-options.md)
- [ScanResult](../types/scan-result.md)

