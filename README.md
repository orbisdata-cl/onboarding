# Onboarding técnico — Orbis Data

Bienvenido. Este repo es tu guía práctica para conocer los estándares de ingeniería de Orbis Data.

No vas a leer documentación teórica — vas a aplicar cada estándar sobre un servicio real.

## Cómo funciona

1. Creá tu rama: `git checkout -b onboarding/tu-nombre`
2. Completá los ejercicios en orden
3. Cada push activa el CI — él te dice si vas bien o qué falta
4. Cuando terminás todo, abrís un PR a `main` — ese PR es tu evidencia de completado

**El PR nunca se mergea.** `main` siempre tiene el esqueleto base limpio para el próximo dev.

## Ejercicios

| # | Tema | Qué vas a hacer |
|---|------|-----------------|
| [01](./exercises/01-ci/) | CI/CD | Configurar el pipeline de integración continua |
| [02](./exercises/02-docker/) | Docker | Containerizar el servicio con la imagen base de Orbis |
| [03](./exercises/03-observability/) | Observabilidad | Agregar logs estructurados y health checks |
| [04](./exercises/04-pull-request/) | Pull Request | Abrir el PR final con todo en verde |

## El servicio

En `/service` vas a encontrar un servicio Express con partes incompletas a propósito.
Tu trabajo es completarlo ejercicio por ejercicio hasta que el CI esté completamente verde.

## Referencias

- [Estándares de CI/CD](https://github.com/orbisdata-cl/github-actions-templates)
- [Imágenes Docker base](https://github.com/orbisdata-cl/docker-bases)
- [Estándares de observabilidad](https://github.com/orbisdata-cl/observability-standards)
- [Documentación interna](https://app.notion.com/p/doc-testia)
