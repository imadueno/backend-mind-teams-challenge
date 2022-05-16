/**
 * manejador de errores custom
 * @param {*} res
 * @param {*} err objeto error del catch
 * @param {*} internal string verboso de error
 * @param {*} code http status code
 */

const handleHttpError = (res, err, internal = "", code = 403) => {
  const message = err.message ?? "ALGO SALIO MAL";
  res.status(code);
  res.send({
    error: { message, internal },
  });
};

module.exports = { handleHttpError };
