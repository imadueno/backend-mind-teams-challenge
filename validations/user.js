/**
 * Archivo de validaciónes para las operaciones
 * relacionadas con el modelo User utilizando
 * express-validator
 */

const { check } = require("express-validator");
const checkValidation = require("../utils/handleExpressValidator");

const createItemValidation = [
  check("name").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty(),
  check("englishLevel").exists().notEmpty(),
  check("technicalKnowledge").exists().notEmpty(),
  check("resumeUrl").exists().notEmpty(),
  (req, res, next) => {
    checkValidation(req, res, next);
  },
];

const getItemByIdValidation = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    checkValidation(req, res, next);
  },
];

module.exports = {
  createItemValidation,
  getItemByIdValidation,
};
