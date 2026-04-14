---
title: Установка
order: 0
searchable: true
tags:
  - установка
  - setup
---

# Установка

## Требования

- **React** 18+
- **Vite** 5+
- Рекомендуется Node.js 18+

## Установка

```bash
pnpm add @da_b1rmuda/path-rush
```

## Приватный registry (Gitea)

```
registry=https://registry.npmjs.org/
@da_b1rmuda:registry=https://git.web2bizz.ru/api/packages/da_b1rmuda/npm/
//git.web2bizz.ru/api/packages/da_b1rmuda/npm/:_authToken=${GITEA_TOKEN}
```

> npm/pnpm не читают `.env` автоматически — экспортируйте `GITEA_TOKEN` в окружении или используйте dotenv‑cli.
