class UserController {
    constructor({ userService }) {
      this.userService = userService;
    }
  
    async getUsers(req, res) {
      try {
        const users = await this.userService.findAll();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createUser(req, res) {
      try {
        const user = await this.userService.create(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = UserController;