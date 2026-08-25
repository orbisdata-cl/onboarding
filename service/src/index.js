import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TODO ejercicio 03: reemplazar este console.log por un logger Winston
// El logger debe emitir JSON con los campos: timestamp, level, message, service
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
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

// TODO ejercicio 03: agregar los dos health check endpoints
// GET /health/live  → 200 { status: 'ok' }
// GET /health/ready → 200 { status: 'ok' }

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
