const AppError = require("../utils/AppError");

function verifyUserAuthorization(rolesToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    if (rolesToVerify.includes(role)) {
      throw new AppError("Unauthorized", 403);
    }

    return next();
  };
}

module.exports = verifyUserAuthorization;
