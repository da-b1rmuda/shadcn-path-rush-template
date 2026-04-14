# Basic Usage

Этот сценарий показывает стандартную интеграцию [dockRushScannerPlugin](../api/functions/dock-rush-scanner-plugin.md) и [Documentation](../api/components/documentation.md) в Vite + React проект.

## 1. Подключите Vite plugin

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dockRushScannerPlugin } from '@da_b1rmuda/dock-rush/plugin'

export default defineConfig({
  plugins: [react(), dockRushScannerPlugin()],
})
```

## 2. Создайте структуру документации

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

`public/docs/2.3.3/_meta.json`:

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
  },
  "en/(group-guides)/first-steps.md": {
    "title": "First Steps",
    "order": 0
  },
  "en/github.button.md": {
    "title": "GitHub",
    "url": "https://github.com/da-b1rmuda/dock-rush",
    "target": "_blank",
    "order": 1
  }
}
```

## 3. Смонтируйте Documentation

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'

export default function App() {
  return (
    <Documentation
      title='Dock Rush'
      folderPath='./public/docs'
      versionSelect
      useToggleLanguage
      useSearch
      useToc
      useBreadcrumbs
      usePrevNext
    />
  )
}
```

## 4. Что произойдёт при запуске

- [Documentation](../api/components/documentation.md) запросит scan endpoint и построит структуру sidebar.
- Версии будут отсортированы по убыванию.
- При наличии языков появится language selector.
- При выборе страницы в адрес попадёт hash с путём markdown-файла.
- При `useSearch` поиск будет индексировать заголовки, пути и контент страниц.

## 5. Что не стоит делать в этом сценарии

- Не кладите обычные `.md` прямо в корень версии.
- Не рассчитывайте на page frontmatter как на источник title и order для sidebar.
- Не используйте `position: header` в `.button.md` как замену `headerLinks`: это не подтверждено реализацией.

## See also

- [Configuration](../configuration.md)
- [Common Cases](./common-cases.md)
- [Troubleshooting](./troubleshooting.md)

