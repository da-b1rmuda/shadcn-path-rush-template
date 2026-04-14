# FileInfo

Описание одного файла или одной директории в результате сканирования.

## Definition

```ts
interface FileInfo {
  name: string
  path: string
  relativePath: string
  type: 'file' | 'directory'
  size?: number
  extension?: string
  depth: number
  originalRelativePath?: string
  content?: string
}
```

## Fields

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `name` | `string` | да | — | Имя файла или папки. |
| `path` | `string` | да | — | Полный путь к элементу. |
| `relativePath` | `string` | да | — | Путь относительно сканируемой docs-папки. |
| `type` | `'file' \| 'directory'` | да | — | Тип элемента. |
| `size` | `number` | нет | `undefined` | Размер в байтах, если доступен. |
| `extension` | `string` | нет | `undefined` | Расширение файла без точки для файлов. |
| `depth` | `number` | да | — | Глубина относительно корня docs-папки. |
| `originalRelativePath` | `string` | нет | `undefined` | Исходный путь до языковой фильтрации в клиентском parser. |
| `content` | `string` | нет | `undefined` | Индексируемое содержимое markdown-файла, если scan response включил content. |

## Notes

- [FolderScanner](../classes/folder-scanner.md) сам заполняет базовые поля, но не добавляет `originalRelativePath`.
- `content` появляется только в тех code paths, где scan response включает текстовое содержимое файлов.

## See also

- [ScanResult](./scan-result.md)
- [FileMetadata](./file-metadata.md)
- [FolderScanner](../classes/folder-scanner.md)

