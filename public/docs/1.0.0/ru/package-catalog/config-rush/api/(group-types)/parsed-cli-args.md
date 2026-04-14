# ParsedCliArgs

Нормализованный результат разбора CLI аргументов.

## Definition

```ts
interface ParsedCliArgs {
  readonly command: "inspect" | "validate";
  readonly cwd?: string | undefined;
  readonly definitionPath: string;
  readonly format: "json" | "pretty";
  readonly mode?: string | undefined;
  readonly target: ConfigTarget;
  readonly validation: "error" | "warn";
}
```

## Fields

- `command` - `inspect` или `validate`.
- `cwd` - optional cwd override.
- `definitionPath` - путь до definition file.
- `format` - `json` или `pretty`.
- `mode` - optional mode override.
- `target` - [`ConfigTarget`](./config-target.md).
- `validation` - `error` или `warn`.

## See also

- [`parseCliArgs`](../functions/parse-cli-args.md)
- [`runCli`](../functions/run-cli.md)
