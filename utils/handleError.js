/**
 * manejador de errores custom
 * @param {*} res
 * @param {*} err
 * @param {*} internal string verboso de error
 * @param {*} code http status code
 */

const handleHttpError = (res, err, internal = "", code = 403) => {
  const { message } = err;
  res.status(code);
  res.send({
    error: { message, internal },
  });
};

module.exports = { handleHttpError };
