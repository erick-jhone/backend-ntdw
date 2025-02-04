const Reserva = require('../models/reserva');
const Espaco = require('../models/espaco');
const { Op } = require('sequelize');

class ReservaService {
  async findAll(filters = {}) {
    // Construir objeto de condições de filtro
    const whereConditions = {};

    // Filtro por data (período específico)
    if (filters.dataInicio && filters.dataFim) {
      whereConditions.dataEvento = {
        [Op.between]: [filters.dataInicio, filters.dataFim]
      };
    }

    // Filtro por tipo de espaço
    if (filters.tipoEspaco) {
      whereConditions['$Espaco.tipoEspaco$'] = filters.tipoEspaco;
    }

    // Filtro por responsável
    if (filters.responsavelNome) {
      whereConditions.responsavelNome = {
        [Op.like]: `%${filters.responsavelNome}%`
      };
    }

    // Filtro por situação da reserva
    if (filters.situacaoReserva) {
      whereConditions.situacaoReserva = filters.situacaoReserva;
    }

    // Buscar reservas com filtros e incluir informações do espaço
    return Reserva.findAll({
      where: whereConditions,
      include: [
        {
          model: Espaco,
          attributes: ['id', 'nome', 'tipoEspaco']
        }
      ],
      // Opções de ordenação
      order: [
        ['dataEvento', 'ASC'],
        ['horarioInicio', 'ASC']
      ]
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