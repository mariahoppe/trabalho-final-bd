// src/database/databaseService.js

// Função para simular pegar todos os clientes do banco de dados
async function getAllClients() {
  return [
    { id: 1, nome: 'Maria', email: 'maria@example.com' },
    { id: 2, nome: 'João', email: 'joao@example.com' }
  ];
}

// Função para simular pegar compras dos clientes
async function getClientsPurchases() {
  return [
    { clienteId: 1, produto: 'Produto A', valor: 100 },
    { clienteId: 2, produto: 'Produto B', valor: 200 }
  ];
}

module.exports = { getAllClients, getClientsPurchases };
