const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;