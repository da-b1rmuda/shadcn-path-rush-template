# Installation

## Prerequisites

- Пакет называется `config-rush`.
- `zod` указан как обязательный peer dependency.
- `react` и `vite` указаны как optional peer dependencies и нужны только для `config-rush/react` и `config-rush/plugin`.

## Установка

Базовая установка:

```bash
pnpm install config-rush zod
```

Если используется React entry point:

```bash
pnpm install config-rush zod react react-dom
```

Если используется Vite plugin:

```bash
pnpm install config-rush zod vite
```

## Минимальная проверка

```ts
import { defineConfig, loadConfig } from "config-rush";
import { z } from "zod";

const definition = defineConfig({
  client: {
    apiUrl: z.string().url()
  }
});

await loadConfig(definition, {
  sources: []
});
```

Проверка Node helpers:

```ts
import { createEnvSource } from "config-rush/node";

createEnvSource();
```

## CLI

Пакет публикует бинарь `config-rush`. Команды и аргументы описаны на странице [`runCli`](./api/functions/run-cli.md).
