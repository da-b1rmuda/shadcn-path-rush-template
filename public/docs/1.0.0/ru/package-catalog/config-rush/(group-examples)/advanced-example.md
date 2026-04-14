# Advanced Example (Vite + React + Mode-aware config)

Этот пример показывает "реальный" фронтенд-поток:

1. одна schema (`definition`) описывает client и server поля;
2. Vite plugin генерирует client-safe virtual module `virtual:config-rush/client`;
3. React читает конфиг через [`ConfigProvider`](../api/components/config-provider.md) и [`useConfig`](../api/hooks/use-config.md);
4. в dev конфиг обновляется без полного reload страницы (через HMR event).

Основа в репозитории:

- `template/src/config-definition.ts`
- `template/vite.config.ts`
- `template/src/config-client.ts`
- `template/src/main.tsx`
- `template/src/App.tsx`

## 1. Definition: client vs server

```ts
import { defineRushAppConfig } from "config-rush";
import { z } from "zod";

export const definition = defineRushAppConfig({
  client: {
    apiUrl: z.string().url(),
    flags: {
      liveReload: z.coerce.boolean().default(true)
    }
  },
  server: {
    jwtSecret: z.string().min(32).meta({ secret: true })
  }
});
```

## 2. Vite plugin: загрузка client-safe config по mode

```ts
import { defineConfig } from "vite";
import { configRushPlugin } from "config-rush/plugin";
import { createEnvSource, createFileSource } from "config-rush/node";

import { definition } from "./src/config-definition";

export default defineConfig(({ mode }) => ({
  plugins: [
    configRushPlugin({
      definition,
      loadOptions: {
        mode,
        sources: [
          createFileSource({
            files: ["config/base.yaml"],
            optional: true
          }),
          createEnvSource({
            mode
          })
        ]
      }
    })
  ]
}));
```

Notes:

- Plugin всегда работает с client target (server данные не должны попасть в virtual module).
- `mode` влияет на выбор `.env.<mode>` слоёв.
- В dev plugin может отправлять targeted update event [`CONFIG_RUSH_UPDATE_EVENT`](../api/constants/config-rush-update-event.md) вместо полного reload.

## 3. Client runtime: `virtual:config-rush/client`

```ts
import clientConfig from "virtual:config-rush/client";
export default clientConfig;
```

Virtual module предоставляет client config и `$subscribe`, поэтому `useConfig(...)` может автоматически обновляться.

## 4. React: Provider и чтение path значений

```tsx
import { ConfigProvider } from "config-rush/react";
import clientConfig from "virtual:config-rush/client";

export const Root = () => (
  <ConfigProvider config={clientConfig}>
    <App />
  </ConfigProvider>
);
```

```tsx
import { useConfig } from "config-rush/react";

export const App = () => {
  const apiUrl = useConfig<string>("client.apiUrl");
  const liveReload = useConfig<boolean>("client.flags.liveReload");
  return (
    <div>
      API: {apiUrl} (liveReload={String(liveReload)})
    </div>
  );
};
```

## 5. .env и mode: практический пример

`.env` (development default):

```dotenv
PUBLIC_API_URL=https://api.dev.example.com
```

`.env.production`:

```dotenv
PUBLIC_API_URL=https://api.prod.example.com
```

Такой подход позволяет:

- держать одинаковую схему для dev и prod;
- переключать values через `mode`;
- не тащить server secrets на клиент (server поля в virtual module отсутствуют).

## 6. Как это помогает в реальных приложениях

- Фронтенд: `client.*` содержит публичные значения (API base url, feature flags, публичные DSN).
- Бэкенд/SSR: `server.*` содержит секреты и закрытые параметры.
- Единая схема гарантирует, что конфиг валиден до старта приложения, а не "сломается где-то в рантайме".
- Diagnostics (`$diagnostics()`, `$explain(...)`) дают быстрый ответ "почему значение такое" и "кто его переопределил".
