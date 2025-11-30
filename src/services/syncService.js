// src/services/syncService.js
const redis = require('./redisClient');
const { getAllClients, getClientsPurchases } = require('../database/databaseService');  // Funções para acessar o banco de dados

async function syncData() {
  try {
    // Sincronizar dados dos clientes
    const clients = await getAllClients();  // Função para pegar todos os clientes
    await redis.set('clientes', JSON.stringify(clients));  // Armazenar os dados no Redis

    // Sincronizar compras dos clientes
    const purchases = await getClientsPurchases();  // Função para pegar as compras
    await redis.set('compras_clientes', JSON.stringify(purchases)); // Armazenar as compras no Redis

    console.log('Dados sincronizados com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar dados: ', error);
  }
}

module.exports = syncData;
