// src/services/redisClient.js
const Redis = require('ioredis');

// Conectar ao Redis localmente
const redis = new Redis({
  host: '127.0.0.1', // Endereço do Redis (localhost)
  port: 6379,         // Porta padrão do Redis
  db: 0,              // Banco de dados padrão no Redis
});

module.exports = redis;
