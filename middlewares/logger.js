const { loggerModel } = require("../models");
/**
 * revisa las peticiones y genera un registro
 * por cada una de ellas en la db
 * PENDIENTE
 * @param {*} req
 * @param {*} rest
 * @param {*} next
 */

const logger = async (req, res, next) => {
  const { method } = req;
  const request = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const date = new Date();
  const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const body = {
    method,
    request,
  };

  const data = await loggerModel.create(body);
  // se visualiza en consola tambien
  console.log(`${dateString} | ${method} | ${request}`);
  next();
};

module.exports = logger;
