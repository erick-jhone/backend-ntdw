const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Espaco = require('espaco');

const Reserva = sequelize.define('Reserva', {
  nomeEvento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoEvento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  responsavelNome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  responsavelContato: {
    type: DataTypes.STRING
  },
  dataEvento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  periodo: {
    type: DataTypes.ENUM('manha', 'tarde', 'noite'),
    allowNull: false
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horarioInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horarioTermino: {
    type: DataTypes.TIME,
    allowNull: false
  },
  totalParticipantes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  situacaoReserva: {
    type: DataTypes.ENUM('confirmada', 'cancelada', 'pendente'),
    defaultValue: 'pendente'
  },
  espacoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'reserva',
  timestamps: true,
  paranoid: true
});

Reserva.belongsTo(Espaco, { foreignKey: 'espacoId' });
Espaco.hasMany(Reserva, { foreignKey: 'espacoId' });

module.exports = Reserva;