# FolderScanner

Класс для рекурсивного сканирования docs-папки и извлечения списка версий.

## Назначение

[FolderScanner](./folder-scanner.md) обходит файловую структуру через `fast-glob`, формирует массив [FileInfo](../types/file-info.md) и извлекает версии из директорий формата `x.y.z`.

## Constructor

```ts
new FolderScanner()
```

## Methods

### `scan`

```ts
async scan(
  folderPath: string,
  options: ScanOptions = {}
): Promise<ScanResult>
```

Параметры:

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `folderPath` | `string` | да | — | Абсолютный или разрешённый путь к docs-папке. |
| `options` | [ScanOptions](../types/scan-options.md) | нет | `{}` | Параметры сканирования. |

Возвращает:

- [ScanResult](../types/scan-result.md) с `success`, `files` и `versions`;
- при ошибке возвращает `success: false`, а не бросает исключение наружу.

## Properties

Публичные свойства экземпляра не подтверждены.

## Usage Notes

- Реально используются только `ignore` и `deep` из [ScanOptions](../types/scan-options.md).
- Сканирование выполняется рекурсивно и включает директории и файлы.
- Версии сортируются по убыванию, от новой к старой.

## Example

```ts
import { FolderScanner } from '@da_b1rmuda/dock-rush/server'

const scanner = new FolderScanner()
const result = await scanner.scan('C:/project/public/docs', {
  ignore: ['**/*.tmp.md'],
})
```

## See also

- [ScanOptions](../types/scan-options.md)
- [ScanResult](../types/scan-result.md)
- [FileInfo](../types/file-info.md)

