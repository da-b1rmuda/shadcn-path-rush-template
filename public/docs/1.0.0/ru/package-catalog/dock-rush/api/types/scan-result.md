# ScanResult

Результат сканирования docs-папки.

## Definition

```ts
interface ScanResult {
  success: boolean
  files: FileInfo[]
  error?: string
  versions: string[]
  metadata?: FileMetadata
}
```

## Fields

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `success` | `boolean` | да | — | Успех или неуспех операции сканирования. |
| `files` | [FileInfo](./file-info.md)[] | да | — | Список найденных файлов и директорий. |
| `error` | `string` | нет | `undefined` | Текст ошибки, если `success=false`. |
| `versions` | `string[]` | да | — | Найденные версии, отсортированные по убыванию. |
| `metadata` | [FileMetadata](./file-metadata.md) | нет | `undefined` | Metadata map, если результат сформирован scan endpoint'ом plugin. |

## Notes

- [FolderScanner](../classes/folder-scanner.md) сам возвращает `success`, `files`, `versions` и `error`.
- `metadata` добавляется серверным scan endpoint'ом plugin поверх базового результата сканера.

## See also

- [FolderScanner](../classes/folder-scanner.md)
- [FileInfo](./file-info.md)
- [FileMetadata](./file-metadata.md)

