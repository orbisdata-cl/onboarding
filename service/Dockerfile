# syntax=docker/dockerfile:1

# Stage 1: Install production dependencies
FROM orbisdata/node-base:lts AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# Stage 2: Production runner
FROM orbisdata/node-base:lts AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .

EXPOSE 3000
CMD ["node", "src/index.js"]
