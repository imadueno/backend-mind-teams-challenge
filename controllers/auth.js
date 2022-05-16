const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { compare } = require("../utils/handleCrypt");
const { sign } = require("../utils/handleJwt");

const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel.findOne({ email: req.email });

    // si no hay user tiramos error
    if (!user) {
      handleHttpError(res, {}, "ERROR_INVALID_USER_AUTH");
      return;
    }

    const hashPassword = user.password; // contraseña hasheada prev guardada
    const passwordIsCorrect = compare(req.password, hashPassword);

    if (!passwordIsCorrect) {
      handleHttpError(res, {}, "ERROR_INVALID_PASSWORD_AUTH");
      return;
    }

    // en caso de existir el usuario retornamos un JTW y sus datos
    const data = {
      token: await sign(user),
      user,
    };

    res.send({ data });
  } catch (err) {
    handleHttpError(req, err, "ERROR_LOGIN_AUTH");
  }
};

module.exports = { login };
