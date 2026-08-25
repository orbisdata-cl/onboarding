# Ejercicio 02 — Docker

## Objetivo

Containerizar el servicio usando la imagen base de Orbis Data. No escribir un Dockerfile desde cero.

## Tu tarea

Completar el archivo `service/Dockerfile` usando la imagen base correcta para un servicio Express.

## Criterio de éxito

El CI buildea la imagen y verifica que el servicio responde:

```bash
docker build -t orbis-onboarding ./service
docker run -p 3000:3000 orbis-onboarding
curl http://localhost:3000/products  # debe retornar JSON
```

## Referencia

- [Imagen node-base](https://github.com/orbisdata-cl/docker-bases/tree/main/node-base)
- [Documentación Docker bases](https://app.notion.com/p/doc-testia/Dockerfile-uso-3c7191cec7de80fcba76f43fc63ecf6f)

## Pistas

- Usar multi-stage: un stage para `npm ci --omit=dev`, otro para la imagen final
- El usuario final debe ser `node`, no `root`
- El `COPY` del código va con `--chown=node:node`
- El `CMD` arranca con `node src/index.js`
