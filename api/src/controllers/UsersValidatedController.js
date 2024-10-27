const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersValidatedController {
  async get(request, response) {
    const { user } = request;

    const checkUserExists = await knex("users").where({ id: user.id });

    if (checkUserExists.length === 0) {
      throw new AppError("Unauthenticated.", 401);
    }

    return response.status(200).json();
  }
}

module.exports = UsersValidatedController;
