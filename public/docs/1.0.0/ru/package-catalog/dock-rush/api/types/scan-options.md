# ScanOptions

Тип параметров для метода [FolderScanner.scan](../classes/folder-scanner.md).

## Definition

```ts
interface ScanOptions {
  pattern?: string | string[]
  ignore?: string[]
  deep?: number
  onlyFiles?: boolean
  onlyDirectories?: boolean
  stats?: boolean
}
```

## Fields

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `pattern` | `string \| string[]` | нет | объявлен в типе | В текущем `FolderScanner.scan()` не используется. |
| `ignore` | `string[]` | нет | `undefined` | Передаётся в `fast-glob` как ignore pattern list. |
| `deep` | `number` | нет | `Infinity` | Ограничивает глубину сканирования. |
| `onlyFiles` | `boolean` | нет | объявлен в типе | В текущем `FolderScanner.scan()` не используется. |
| `onlyDirectories` | `boolean` | нет | объявлен в типе | В текущем `FolderScanner.scan()` не используется. |
| `stats` | `boolean` | нет | объявлен в типе | В текущем `FolderScanner.scan()` не используется. |

## Notes

- Публичный тип шире, чем фактическая реализация метода.
- Для подтверждённого поведения опирайтесь на `ignore` и `deep`.

## See also

- [FolderScanner](../classes/folder-scanner.md)
- [ScanResult](./scan-result.md)

