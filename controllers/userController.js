const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");

/**
 * obtener a todos los usuarios registrados
 * @param {*} req
 * @param {*} res
 */
const getItemList = async (req, res) => {
  try {
    // no requiere limpiar el body, ya no que insertaremos nada, sólo pedimos
    const data = await userModel.find({});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err, "ERROR_LIST_USER");
  }
};

/**
 * obtener a un usuario por id
 * @param {*} req
 * @param {*} res
 */
const getItemById = async (req, res) => {
  try {
    // requiere sanitización
    req = matchedData(req);
    const { id } = req;
    const data = await userModel.findById(id);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err, "ERROR_DETALLE_USER");
  }
};

/**
 * crear nuevo registro de usuario
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    // 1. matchedData nos retorna sólo los campos que especificamos en la validación
    // 2. le pasamos el request, y automaticamente va a limpiar el body
    // 3. retorna el body limpio con los datos de su respectiva validación hecha previamente

    const bodyClean = matchedData(req);
    const data = await userModel.create(bodyClean);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err, "ERROR_CREATE_USER");
  }
};

/**
 * acttualizar usuario
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await userModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err, "ERROR_UPDATE_USER");
  }
};

/**
 * Borrar un usuario de forma permanente
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    // requiere sanitización
    req = matchedData(req);
    const { id } = req;
    const data = await userModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err, "ERROR_DELETE_USER");
  }
};

module.exports = {
  getItemList,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
