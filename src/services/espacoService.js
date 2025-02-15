const Espaco = require('../models/espaco');
const { Op } = require('sequelize');

class EspacoService {
  async findAll(filters = {}) {
    return Espaco.findAll({
      where: {
        ...(filters.tipoEspaco && { tipoEspaco: filters.tipoEspaco }),
        ...(filters.situacao && { situacao: filters.situacao })
      }
    });
  }

  async findById(id) { // Novo método para buscar um espaço por ID
    return Espaco.findByPk(id);
  }

  async updateEspaco(id, updatedData) {
    const espaco = await Espaco.findByPk(id); // Busca o espaço pelo ID
    if (!espaco) {
      throw new Error('Espaço não encontrado');
    }

    // Atualiza os dados do espaço com os novos valores
    return espaco.update(updatedData);
  }

  async create(data) {
    // Verificar duplicidade de nome
    const existingEspaco = await Espaco.findOne({
      where: {
        nome: data.nome,
        situacao: { [Op.or]: ['ativo', 'inativo'] }
      }
    });

    if (existingEspaco) {
      throw new Error('Já existe um espaço com este nome');
    }

    return Espaco.create(data);
  }

  async desativarEspaco(id) {
    const espaco = await Espaco.findByPk(id);
    if (!espaco) {
      throw new Error('Espaço não encontrado');
    }

    espaco.situacao = 'inativo';
    return espaco.save();
  }

  async reativarEspaco(id) {
    const espaco = await Espaco.findByPk(id);
    if (!espaco) {
      throw new Error('Espaço não encontrado');
    }

    espaco.situacao = 'ativo';
    return espaco.save();
  }

  
}

module.exports = EspacoService;
