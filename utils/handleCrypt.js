const bcrypt = require("bcryptjs");

/**
 * encripta un string
 * @param {*} string
 * @returns
 */
const encrypt = async (string) => {
  const hash = await bcrypt.hash(string, 10);
  return hash;
};

/**
 * compara string plano y string encriptado
 * @param {*} string
 */
const compare = async (string, hash) => {
  const compare = await bcrypt.compare(string, hash);
  return compare;
};

module.exports = { encrypt, compare };
