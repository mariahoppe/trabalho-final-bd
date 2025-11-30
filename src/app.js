// src/app.js
const express = require('express');
const redis = require('./services/redisClient');
const syncData = require('./services/syncService');

const app = express();
const port = 3000;

// Rota para consultar os dados dos clientes armazenados no Redis
app.get('/redis/clientes', async (req, res) => {
  try {
    const clients = await redis.get('clientes');  // Buscar no Redis
    res.json(JSON.parse(clients));  // Retornar os dados em JSON
  } catch (error) {
    res.status(500).send('Erro ao recuperar dados do Redis');
  }
});

// Rota para consultar as compras dos clientes
app.get('/redis/compras', async (req, res) => {
  try {
    const purchases = await redis.get('compras_clientes');
    res.json(JSON.parse(purchases));  // Retornar as compras em JSON
  } catch (error) {
    res.status(500).send('Erro ao recuperar dados do Redis');
  }
});

// Rota para sincronizar os dados com o Redis
app.get('/sync', async (req, res) => {
  try {
    await syncData(); // Sincroniza os dados
    res.send('Dados sincronizados com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao sincronizar dados');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
