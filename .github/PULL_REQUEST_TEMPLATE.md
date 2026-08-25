## Checklist de onboarding

### Ejercicio 01 — CI/CD
- [ ] El archivo `.github/workflows/ci.yml` existe
- [ ] El CI corre automáticamente en cada push
- [ ] El paso de linting pasa
- [ ] El paso de tests pasa

### Ejercicio 02 — Docker
- [ ] El `Dockerfile` está completo (no tiene TODOs)
- [ ] Usa la imagen base `orbisdata/node-base:lts`
- [ ] Tiene multi-stage build
- [ ] Corre como usuario `node`, no como `root`
- [ ] El CI buildea la imagen sin errores

### Ejercicio 03 — Observabilidad
- [ ] Los `console.log` fueron reemplazados por Winston
- [ ] Los logs salen en formato JSON
- [ ] `GET /health/live` responde 200
- [ ] `GET /health/ready` responde 200
- [ ] Todos los tests pasan

### General
- [ ] Leí la documentación de [CI/CD](https://github.com/orbisdata-cl/github-actions-templates)
- [ ] Leí la documentación de [Docker bases](https://github.com/orbisdata-cl/docker-bases)
- [ ] Leí la documentación de [Observabilidad](https://github.com/orbisdata-cl/observability-standards)
