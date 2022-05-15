/**
 * validationResult evalua las validaciones y verifica que se
 * cumplan, de lo contrario emite un error
 */

const { validationResult } = require("express-validator");
const { handleHttpError } = require("./handleError");

const checkValidation = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    handleHttpError(res, err, err.array());
  }
};

module.exports = checkValidation;
