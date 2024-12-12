class EspacoController {
    constructor({ espacoService }) {
      this.espacoService = espacoService;
    }
  
    async getEspacos(req, res) {
      try {
        const espacos = await this.espacoService.findAll(req.query);
        res.json(espacos);
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