# ConsoleLogger

Утилитарный класс для форматированного вывода scan результата в консоль.

## Назначение

[ConsoleLogger](./console-logger.md) используется server-side кодом и prop `logTreeFiles` у [Documentation](../components/documentation.md), чтобы показывать структуру файлов в форматах tree, list или minimal.

## Constructor

Класс не требует экземпляра для подтверждённого сценария использования: рабочий API — статический метод `log`.

## Methods

### `log`

```ts
static log(
  files: FileInfo[],
  folderPath: string,
  format: ConsoleFormat = 'tree'
): void
```

Параметры:

| Имя | Тип | Обязательный | Значение по умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `files` | [FileInfo](../types/file-info.md)[] | да | — | Массив отсканированных элементов. |
| `folderPath` | `string` | да | — | Путь, который будет показан в заголовке лога. |
| `format` | [ConsoleFormat](../types/console-format.md) | нет | `'tree'` | Формат вывода. |

## Properties

Публичные instance properties не подтверждены.

## Usage Notes

- `tree` сортирует директории перед файлами.
- `list` печатает нумерованный список `relativePath`.
- `minimal` печатает только количество директорий и файлов.

## Example

```ts
import { ConsoleLogger } from '@da_b1rmuda/dock-rush/server'

ConsoleLogger.log(files, './public/docs', 'tree')
```

## See also

- [ConsoleFormat](../types/console-format.md)
- [FileInfo](../types/file-info.md)
- [Documentation](../components/documentation.md)

