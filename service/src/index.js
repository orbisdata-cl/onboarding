import express from 'express';
import winston from 'winston';

const app = express();
const PORT = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'orbis-onboarding-service' },
  transports: [new winston.transports.Console()],
});

app.use(express.json());

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
  const id = parseInt(req.params.id);
  if (id === 1) return res.json({ id: 1, name: 'Producto A', price: 100 });
  if (id === 2) return res.json({ id: 2, name: 'Producto B', price: 200 });
  res.status(404).json({ error: 'Product not found' });
});

app.get('/health/live', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/health/ready', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

export default app;
