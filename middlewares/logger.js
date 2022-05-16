/**
 * revisa las peticiones y genera un registro
 * por cada una de ellas en la db
 * PENDIENTE
 * @param {*} req
 * @param {*} rest
 * @param {*} next
 */

const logger = (req, res, next) => {
  const httpMethod = req.method;
  const request = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const date = new Date();
  const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  console.log(`${dateString} | ${httpMethod} | ${request}`);
  next();
};

module.exports = logger;
