class ReservaController {
    constructor({ reservaService }) {
      this.reservaService = reservaService;
    }
  
    async getReservas(req, res) {
      try {
        const reservas = await this.reservaService.findAll(req.query);
        res.json(reservas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createReserva(req, res) {
      try {
        const reserva = await this.reservaService.create(req.body);
        res.status(201).json(reserva);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async cancelarReserva(req, res) {
      try {
        const reserva = await this.reservaService.cancelarReserva(req.params.id);
        res.json(reserva);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = ReservaController;