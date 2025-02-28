require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('modulo_logistica', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true
  },
  sync: {
    alter: true, 
    force: false 
  }
});''

async function syncAllModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Todos os modelos foram sincronizados com sucesso');
  } catch (error) {
    console.error('Erro ao sincronizar modelos:', error);
  }
}

syncAllModels();

module.exports = sequelize;