# Ejercicio 03 — Observabilidad

## Objetivo

Entender los estándares de observabilidad de Orbis Data y extender el servicio con un nuevo endpoint que los aplique correctamente.

## Tu tarea

El servicio ya tiene logs estructurados (Winston) y health checks. Tu trabajo es agregar un nuevo endpoint que siga los mismos patrones.

### Agregar `GET /products/search?name=X`

El endpoint debe:
1. Recibir un query param `name` y filtrar los productos por nombre (búsqueda parcial, case-insensitive)
2. Emitir un log estructurado con el término buscado y la cantidad de resultados
3. Retornar 400 si el param `name` no está presente

Ejemplo:
```
GET /products/search?name=a
→ 200 [{ "id": 1, "name": "Producto A", "price": 100 }]

GET /products/search
→ 400 { "error": "Missing required query param: name" }
```

## Criterio de éxito

Los tests nuevos pasan:
```bash
npm test
```

Los logs del nuevo endpoint salen en JSON con los campos correctos:
```json
{ "timestamp": "...", "level": "info", "message": "search", "term": "a", "results": 1, "service": "orbis-onboarding-service" }
```

## Referencia

- [Implementación logger Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/index.js)
- [Health checks Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/health.js)
