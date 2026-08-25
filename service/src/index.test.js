import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import app from './index.js';
import http from 'node:http';

function request(path) {
  return new Promise((resolve, reject) => {
    const server = http.createServer(app);
    server.listen(0, () => {
      const port = server.address().port;
      http.get(`http://localhost:${port}${path}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          server.close();
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        });
      }).on('error', (err) => { server.close(); reject(err); });
    });
  });
}

describe('products', () => {
  it('GET /products returns array', async () => {
    const { status, body } = await request('/products');
    assert.equal(status, 200);
    assert.ok(Array.isArray(body));
    assert.ok(body.length > 0);
  });

  it('GET /products/:id returns product', async () => {
    const { status, body } = await request('/products/1');
    assert.equal(status, 200);
    assert.equal(body.id, 1);
  });

  it('GET /products/:id returns 404 for unknown id', async () => {
    const { status } = await request('/products/999');
    assert.equal(status, 404);
  });
});

describe('health checks', () => {
  it('GET /health/live returns 200', async () => {
    const { status, body } = await request('/health/live');
    assert.equal(status, 200);
    assert.equal(body.status, 'ok');
  });

  it('GET /health/ready returns 200', async () => {
    const { status, body } = await request('/health/ready');
    assert.equal(status, 200);
    assert.equal(body.status, 'ok');
  });
});
