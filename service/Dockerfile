# syntax=docker/dockerfile:1

FROM orbisdata/node-base:lts AS deps
COPY package*.json ./
RUN npm ci --omit=dev

FROM orbisdata/node-base:lts AS runner
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .

EXPOSE 3000
CMD ["node", "src/index.js"]
