# Ejercicio 01 — CI/CD

## Objetivo

Configurar el pipeline de CI para el servicio. Cuando hagas push, el CI debe correr automáticamente y validar tu código.

## Tu tarea

Crear el archivo `.github/workflows/ci.yml` en la raíz del repo con un pipeline que:

1. Se ejecute en cada push a tu rama `onboarding/*`
2. Instale las dependencias del servicio (`npm ci`)
3. Corra el linter (`npm run lint`)
4. Corra los tests (`npm test`)

## Criterio de éxito

El CI corre automáticamente cuando se hace push y todos los pasos están en verde.

## Referencia

- [Template CI de Orbis](https://github.com/orbisdata-cl/github-actions-templates/blob/main/ci/ci.yml)

## Pistas

```yaml
name: CI

on:
  push:
    branches:
      - 'onboarding/**'

jobs:
  ci:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: service
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm
          cache-dependency-path: service/package-lock.json
      # completar los pasos que faltan
```
