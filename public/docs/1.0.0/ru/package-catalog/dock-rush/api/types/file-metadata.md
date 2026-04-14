# FileMetadata

Metadata map для путей документации, используемый при построении navigation structure.

## Definition

```ts
interface FileMetadata {
  [key: string]:
    | import('../documentation/types').PageFrontmatter
    | import('../documentation/types').ButtonSettings
    | import('../documentation/types').DropdownSettings
    | import('../documentation/types').GroupSettings
}
```

## Fields

У типа нет фиксированного набора именованных полей: это index signature, где ключом выступает относительный путь файла или папки.

## Notes

- Значения строятся из `<version>/_meta.json`, `group-settings.md`, `dropdown-settings.md` и `.button.md`.
- Ссылки на `PageFrontmatter`, `ButtonSettings`, `DropdownSettings` и `GroupSettings` указывают на внутренние типы, которые не экспортируются как отдельный публичный reference.
- Этот тип удобен как часть [ScanResult](./scan-result.md), но не как стабильный контракт для независимого потребительского кода.

## See also

- [ScanResult](./scan-result.md)
- [FileInfo](./file-info.md)
- [Documentation](../components/documentation.md)

