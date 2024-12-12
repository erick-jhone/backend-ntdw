require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('modulo_logistica', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    // Opções padrão para todos os modelos
    timestamps: true,
    underscored: true
  },
  sync: {
    alter: true, // Ativa alter para todas as entidades
    force: false // Mantém dados existentes
  }
});

// Função para sincronizar todos os modelos
async function syncAllModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Todos os modelos foram sincronizados com sucesso');
  } catch (error) {
    console.error('Erro ao sincronizar modelos:', error);
  }
}

// Chame a função de sincronização
syncAllModels();

module.exports = sequelize;