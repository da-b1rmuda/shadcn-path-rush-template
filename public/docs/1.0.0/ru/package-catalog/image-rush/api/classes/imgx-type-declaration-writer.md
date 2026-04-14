# ImgxTypeDeclarationWriter

Генерирует и обновляет файл деклараций для `?imgx` импортов.

## Назначение

Класс хранит набор шаблонов `declare module` и записывает их в `d.ts` файл, который подключается в потребляющем проекте.

## Constructor

```ts
class ImgxTypeDeclarationWriter {
  constructor(filePath: string);

  static resolveDefaultPath(rootDir: string): string;
  load(): Promise<void>;
  registerImportId(id: string): Promise<void>;
}
```

## Methods

- `resolveDefaultPath(rootDir)` — строит путь `<rootDir>/src/image-rush.auto.d.ts`
- `load()` — читает существующий файл и загружает уже объявленные шаблоны
- `registerImportId(id)` — добавляет новый шаблон и перезаписывает файл

## Properties

Публичные свойства не экспортируются.

## Usage Notes

- Шаблон модуля строится по basename файла и исходной query-строке
- Каждое обновление вызывает перезапись файла
- Класс используется внутри [ImageRushPlugin](../functions/image-rush-plugin.md)

## Example

```ts
const writer = new ImgxTypeDeclarationWriter('src/image-rush.auto.d.ts');
await writer.load();
await writer.registerImportId('src/assets/hero.jpg?imgx&preset=hero');
```

## See also

- [ImageRushPlugin](../functions/image-rush-plugin.md)
- [ImgxPluginOptions](../types/imgx-plugin-options.md)
