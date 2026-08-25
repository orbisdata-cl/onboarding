import express from 'express';
import winston from 'winston';
import { fileURLToPath } from 'node:url';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'orbis-onboarding-service' },
  transports: [new winston.transports.Console()],
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoints (no authentication, no logging)
app.get('/health/live', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/health/ready', (_req, res) => {
  res.json({ status: 'ok' });
});

// Request logger middleware
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.get('/products', (_req, res) => {
  res.json([
    { id: 1, name: 'Producto A', price: 100 },
    { id: 2, name: 'Producto B', price: 200 },
  ]);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === 1) return res.json({ id: 1, name: 'Producto A', price: 100 });
  if (id === 2) return res.json({ id: 2, name: 'Producto B', price: 200 });
  res.status(404).json({ error: 'Product not found' });
});

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  });
}

export default app;
