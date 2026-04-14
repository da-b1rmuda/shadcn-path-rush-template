# CliIO

Интерфейс ввода-вывода для CLI runner.

## Definition

```ts
interface CliIO {
  readonly cwd: string;
  stderr(message: string): void;
  stdout(message: string): void;
}
```

## Fields

- `cwd` - текущая рабочая директория.
- `stderr(message)` - вывод в stderr.
- `stdout(message)` - вывод в stdout.

## See also

- [`CliEnvironment`](./cli-environment.md)
- [`runCli`](../functions/run-cli.md)
