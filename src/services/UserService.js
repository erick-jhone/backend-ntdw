const User = require('../models/user');

class UserService {
  async findAll() {
    return User.findAll();
  }

  async create(data) {
    return User.create(data);
  }
}

module.exports = UserService;