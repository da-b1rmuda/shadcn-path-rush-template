# dockRushScannerPlugin

Vite plugin, который обслуживает scan/markdown/builder endpoint'ы и внедряет stylesheet пакета.

## Назначение

[dockRushScannerPlugin](./dock-rush-scanner-plugin.md) связывает клиентский компонент [Documentation](../components/documentation.md) с файловой системой и scan logic на стороне Node.

## Signature

```ts
function dockRushScannerPlugin(
  options: DockRushScannerPluginOptions = {}
): {
  name: string
  enforce: 'pre'
  resolveId(id: string): string | void
  load(id: string): string | void
  transform(code: string, id: string): string | void
  transformIndexHtml(html: string): { html: string; tags: unknown[] }
  configureServer(server: any): void
  configurePreviewServer(server: any): void
}
```

## Parameters

| Параметр | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `options` | [DockRushScannerPluginOptions](../types/dock-rush-scanner-plugin-options.md) | нет | `{}` | Настройки plugin. |

## Returns

Vite plugin object, который:

- поднимает `/api/dock-rush-scan`;
- поднимает `/api/dock-rush-markdown`;
- поднимает `/api/dock-rush-builder-*` в dev-режиме;
- внедряет stylesheet пакета через virtual module и HTML fallback.

## Throws

Функция сама не документирует синхронные исключения. Ошибки runtime возвращаются через HTTP status codes middleware.

## Usage Notes

- `root` действительно влияет на разрешение путей.
- `includeContentForSearch` влияет на наличие `content` в scan response.
- `route` объявлен в типе, но не применяется текущей реализацией.
- Builder routes доступны только вне production-ветки middleware.

## Example

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

## See also

- [Documentation](../components/documentation.md)
- [DockRushScannerPluginOptions](../types/dock-rush-scanner-plugin-options.md)
- [FolderScanner](../classes/folder-scanner.md)

