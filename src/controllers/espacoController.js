class EspacoController {
  constructor({ espacoService }) {
    this.espacoService = espacoService;
  }

      // Rota para editar um espaço
      async updateEspaco(req, res) {
        try {
          const espacoId = req.params.id; // ID do espaço a ser editado
          const updatedData = req.body; // Dados para atualização
          
          // Chama o método de serviço para atualizar o espaço
          const updatedEspaco = await this.espacoService.updateEspaco(espacoId, updatedData);
          
          res.json(updatedEspaco); // Retorna o espaço atualizado
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
    

  async getEspacos(req, res) {
    try {
      const espacos = await this.espacoService.findAll(req.query);
      res.json(espacos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEspacoById(req, res) { // Novo método para buscar espaço pelo ID
    try {
      const espaco = await this.espacoService.findById(req.params.id);
      if (!espaco) {
        return res.status(404).json({ error: 'Espaço não encontrado' });
      }
      res.json(espaco);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEspaco(req, res) {
    try {
      const espaco = await this.espacoService.create(req.body);
      res.status(201).json(espaco);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async desativarEspaco(req, res) {
    try {
      const espaco = await this.espacoService.desativarEspaco(req.params.id);
      res.json(espaco);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async reativarEspaco(req, res) {
    try {
      const espaco = await this.espacoService.reativarEspaco(req.params.id);
      res.json(espaco);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = EspacoController;
