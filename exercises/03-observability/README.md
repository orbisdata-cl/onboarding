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

Estos endpoints no llevan autenticación y no generan logs (para no contaminar las métricas).

## Criterio de éxito

Los tests ya existen y validan los health checks. El CI debe estar verde:
```
npm test   # los tests de health/live y health/ready deben pasar
```

Y los logs deben salir en formato JSON:
```
docker run orbis-onboarding
# cada request debe imprimir una línea JSON, no texto plano
```

## Referencia

- [Implementación logger Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/index.js)
- [Health checks Node.js](https://github.com/orbisdata-cl/observability-standards/blob/main/node/health.js)
