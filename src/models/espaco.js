const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Espaco = sequelize.define('Espaco', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Já existe um espaço com este nome'
    }
  },
  descricao: {
    type: DataTypes.TEXT
  },
  tipoEspaco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recursosDisponiveis: {
    type: DataTypes.TEXT
  },
  situacao: {
    type: DataTypes.ENUM('ativo', 'inativo'),
    defaultValue: 'ativo'
  },
  localizacao: {
    type: DataTypes.STRING
  },
  notasAdicionais: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'espaco',
  timestamps: true,
  paranoid: true
});

module.exports = Espaco;