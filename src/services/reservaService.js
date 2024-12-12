const Reserva = require('../models/reserva');
const Espaco = require('../models/espaco');
const { Op } = require('sequelize');

class ReservaService {
  async findAll(filters = {}) {
    return Reserva.findAll({
      where: {
        ...(filters.dataInicio && filters.dataFim && { 
          dataEvento: { 
            [Op.between]: [filters.dataInicio, filters.dataFim] 
          } 
        }),
        ...(filters.responsavelNome && { responsavelNome: filters.responsavelNome }),
        ...(filters.situacaoReserva && { situacaoReserva: filters.situacaoReserva })
      },
      include: [Espaco]
    });
  }

  async create(data) {
    // Verificar disponibilidade do espaço
    const conflictReserva = await Reserva.findOne({
      where: {
        espacoId: data.espacoId,
        dataEvento: data.dataEvento,
        periodo: data.periodo,
        turno: data.turno,
        situacaoReserva: 'confirmada',
        [Op.or]: [
          {
            horarioInicio: {
              [Op.between]: [data.horarioInicio, data.horarioTermino]
            }
          },
          {
            horarioTermino: {
              [Op.between]: [data.horarioInicio, data.horarioTermino]
            }
          }
        ]
      }
    });

    if (conflictReserva) {
      throw new Error('Já existe uma reserva para este espaço no mesmo período');
    }

    // Verificar se o espaço está ativo
    const espaco = await Espaco.findByPk(data.espacoId);
    if (!espaco || espaco.situacao !== 'ativo') {
      throw new Error('Espaço indisponível para reserva');
    }

    return Reserva.create(data);
  }

  async cancelarReserva(id) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      throw new Error('Reserva não encontrada');
    }

    reserva.situacaoReserva = 'cancelada';
    return reserva.save();
  }
}

module.exports = ReservaService;