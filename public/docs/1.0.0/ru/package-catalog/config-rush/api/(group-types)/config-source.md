# ConfigSource

Тип источника конфигурации.

## Definition

```ts
interface ConfigSource {
  readonly name: string;
  readonly priority?: number;
  readonly watch?: readonly string[];
  load(context: LoadContext): Promise<unknown> | unknown;
}
```

## Fields

- `name` - имя source.
- `priority` - optional numeric priority.
- `watch` - optional список watch targets.
- `load` - функция загрузки partial payload.

## Notes

- Payload должен быть plain object либо `undefined`/`null`.

## See also

- [`LoadContext`](./load-context.md)
- [`createInlineSource`](../functions/create-inline-source.md)
