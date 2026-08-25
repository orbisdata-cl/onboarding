# Ejercicio 02 — Docker

## Objetivo

Entender cómo está construida la imagen del servicio y verificar que funciona correctamente en un contenedor.

## Tu tarea

1. Revisar el `service/Dockerfile` y entender cada instrucción
2. Buildear la imagen localmente y verificar que arranca
3. Agregar un comentario en cada línea del Dockerfile explicando qué hace y por qué

## Criterio de éxito

La imagen buildea sin errores y el servicio responde dentro del contenedor:

```bash
docker build -t orbis-onboarding ./service
docker run -p 3000:3000 orbis-onboarding

curl http://localhost:3000/products     # debe retornar JSON
curl http://localhost:3000/health/live  # debe retornar { "status": "ok" }
```

## Preguntas para reflexionar

- ¿Por qué se usan dos stages (multi-stage build)?
- ¿Qué diferencia hay entre `npm ci` y `npm install`?
- ¿Por qué el contenedor no corre como `root`?
- ¿Qué pasaría si alguien enviara un SIGTERM al proceso? ¿Cómo se manejaría?

## Referencia

- [Imagen node-base](https://github.com/orbisdata-cl/docker-bases/tree/main/node-base)
- [Documentación Docker bases](https://app.notion.com/p/doc-testia/Dockerfile-uso-3c7191cec7de80fcba76f43fc63ecf6f)
