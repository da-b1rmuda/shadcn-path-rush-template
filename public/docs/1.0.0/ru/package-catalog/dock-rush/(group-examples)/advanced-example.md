# Advanced Example

Этот пример использует больше возможностей [Documentation](../api/components/documentation.md), но избегает неподтверждённых настроек.

## `vite.config.ts`

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dockRushScannerPlugin } from '@da_b1rmuda/dock-rush/plugin'

export default defineConfig({
  plugins: [
    react(),
    dockRushScannerPlugin({
      root: process.cwd(),
      includeContentForSearch: true,
    }),
  ],
})
```

## `src/App.tsx`

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'

export default function App() {
  return (
    <Documentation
      title='Dock Rush'
      folderPath='./public/docs'
      versionSelect
      showVersion
      useToggleTheme
      useToggleLanguage
      useSearch
      useToc
      useBreadcrumbs
      usePrevNext
      useBuilder
      headerLinks={[
        { type: 'github', href: 'https://github.com/da-b1rmuda/dock-rush' },
        { type: 'discord', href: 'https://discord.gg/example' },
        { type: 'web', href: 'https://example.com', label: 'Website' }
      ]}
      footer={{
        bottomText: '© Dock Rush example'
      }}
    />
  )
}
```

## `_meta.json`

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
  "en/(group-guides)/advanced.md": {
    "title": "Advanced Guide",
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

## Структура файлов

```text
public/docs/
  2.3.3/
    _meta.json
    en/
      intro.md
      github.button.md
      (group-guides)/
        group-settings.md
        advanced.md
```

## Что важно в этом примере

- Для header используются `headerLinks`, а не `.button.md`.
- Для поиска content можно запросить либо через `includeContentForSearch`, либо через `useSearch`; встроенный UI и так передаст `content=1`.
- `useBuilder` стоит считать dev-only режимом.
- `markdown`, `route` и button-поля `position/style/variant` здесь намеренно не используются, потому что их рабочее поведение не подтверждено.

