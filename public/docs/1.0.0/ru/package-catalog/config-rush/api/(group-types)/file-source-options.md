# FileSourceOptions

Опции для [`createFileSource`](../functions/create-file-source.md).

## Definition

```ts
interface FileSourceOptions {
  readonly cwd?: string;
  readonly files: readonly string[];
  readonly optional?: boolean;
  readonly priority?: number;
}
```

## Fields

- `cwd` - базовая директория.
- `files` - список файлов в порядке merge.
- `optional` - пропускать missing files.
- `priority` - source priority override.

## See also

- [`createFileSource`](../functions/create-file-source.md)
