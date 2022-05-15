/**
 * verificamos un atributo custom del header
 */

const customHeader = (req, res, next) => {
  try {
    console.log(req.headers);
    const apiKey = req.headers.api_key;

    // continua la ejecución si pasa la validación
    if (apiKey === "isai-123") {
      next();
    } else {
      throw new Error("BAD_API_KEY");
    }
  } catch (err) {
    res.status(403);
    res.send({ error: err.message });
  }
};

module.exports = { customHeader };
