/**
 * Archivo de validaciónes para las operaciones
 * relacionadas con la autenticación Auth
 */

const { check } = require("express-validator");
const checkValidation = require("../utils/handleExpressValidator");

const loginValidation = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty(),
  (req, res, next) => {
    checkValidation(req, res, next);
  },
];

module.exports = {
  loginValidation,
};
