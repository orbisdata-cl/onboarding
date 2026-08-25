# Ejercicio 03 — Observabilidad

## Objetivo

Agregar logs estructurados y health checks al servicio. Sin esto, en producción no es posible saber qué está pasando.

## Tu tarea

### Parte A — Logs estructurados

Reemplazar los `console.log` en `service/src/index.js` por un logger Winston que emita JSON.

Cada log debe tener estos campos:
```json
{
  "timestamp": "2026-08-25T12:00:00.000Z",
  "level": "info",
  "message": "GET /products",
  "service": "orbis-onboarding-service"
}
```

### Parte B — Health checks

Agregar dos endpoints en `service/src/index.js`:

```
GET /health/live   → 200 { "status": "ok" }
GET /health/ready  → 200 { "status": "ok" }
```

Estos endpoints no llevan autenticación y no generan logs.

## Criterio de éxito

Los tests ya existen y validan los health checks. Deben pasar:
```bash
npm test
```

## Referencia

- [Implementación logger Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/index.js)
- [Health checks Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/health.js)
