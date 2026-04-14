# DockRushScannerPluginOptions

Тип опций для [dockRushScannerPlugin](../functions/dock-rush-scanner-plugin.md).

## Definition

```ts
interface DockRushScannerPluginOptions {
  route?: string
  root?: string
  includeContentForSearch?: boolean
}
```

## Fields

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `route` | `string` | нет | объявлен в типе | Поле объявлено, но текущая реализация plugin его не использует. |
| `root` | `string` | нет | `server.config.root` или `process.cwd()` | Корневая папка для разрешения `folderPath`. |
| `includeContentForSearch` | `boolean` | нет | `false` | Включает содержимое markdown-файлов в scan response. |

## Notes

- Не следует документировать `route` как рабочий override API path без правки кода.
- Встроенный UI поиска у [Documentation](../components/documentation.md) и так добавляет `content=1`, поэтому `includeContentForSearch` не обязателен для этого конкретного клиента.

## See also

- [dockRushScannerPlugin](../functions/dock-rush-scanner-plugin.md)
- [ScanResult](./scan-result.md)

