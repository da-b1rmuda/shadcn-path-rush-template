# Common Cases

## Версии без языковых папок

Если языковые папки не нужны, структура может быть только версионной:

```text
public/docs/
  1.2.0/
    _meta.json
    api/
      overview.md
      client.md
```

Под этот сценарий подходят [Documentation](../api/components/documentation.md) и [dockRushScannerPlugin](../api/functions/dock-rush-scanner-plugin.md) без дополнительных настроек.

## Версии с языками

Если нужны локализации, создавайте двухбуквенные подпапки:

```text
public/docs/
  2.0.0/
    _meta.json
    en/
      intro.md
    ru/
      intro.md
```

При `useToggleLanguage=true` [Documentation](../api/components/documentation.md) покажет переключатель языка.

## Группы и dropdown

Подтверждённые варианты:

- group: папка вида `(group-...)`;
- dropdown: обычная папка;
- настройки group: `group-settings.md`;
- настройки dropdown: `dropdown-settings.md`.

Пример:

```text
public/docs/
  2.0.0/
    _meta.json
    en/
      (group-guides)/
        group-settings.md
        first-steps.md
      api/
        dropdown-settings.md
        client.md
        server.md
```

## `_meta.json` для navigation metadata

`_meta.json` — подтверждённый источник для:

- `title`
- `order`
- `hidden`
- `icon`
- `searchable`

Пример:

```json
{
  "en/api": {
    "title": "API",
    "order": 20
  },
  "en/api/client.md": {
    "title": "Client API",
    "order": 0
  }
}
```

## Внутренние markdown-ссылки и изображения

Подтверждённые сценарии markdown:

- ссылка на другой `.md` внутри docs-дерева;
- ссылка на anchor внутри текущей страницы;
- относительный путь к изображению.

Пример:

```md
[Client API](./client.md)
[Install section](#installation)
![Architecture](./images/diagram.png)
```

## Footer и header links

Для header используйте `headerLinks` у [Documentation](../api/components/documentation.md), а не `.button.md`. Для footer используйте `footer`.

Пример:

```tsx
<Documentation
  folderPath='./public/docs'
  headerLinks={[
    { type: 'github', href: 'https://github.com/da-b1rmuda/dock-rush' },
    { type: 'web', href: 'https://example.com', label: 'Website' }
  ]}
  footer={{
    bottomText: 'Documentation footer'
  }}
/>
```

## Dev-only builder

`useBuilder` открывает builder UI только в dev-сценарии. Этот режим следует считать инструментом редактирования структуры, а не production feature.

## See also

- [Basic Usage](./basic-usage.md)
- [Troubleshooting](./troubleshooting.md)
- [Documentation](../api/components/documentation.md)

