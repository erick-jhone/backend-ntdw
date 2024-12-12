require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('modulo_logistica', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

module.exports = sequelize;