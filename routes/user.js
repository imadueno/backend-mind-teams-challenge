const express = require("express");
const router = express.Router();
const {
  getItemList,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/userController");
const {
  getItemByIdValidation,
  createItemValidation,
} = require("../validations/user");

/**
 * Las rutas sólo llaman a su controller donde se lleva a cabo
 * toda la lógica
 */

router.get("/", getItemList); // ✅
router.get("/:id", getItemByIdValidation, getItemById); // ✅
router.post("/", createItemValidation, createItem); // ✅
// son dos validaciones iguales a las anteriores
router.put("/:id", getItemByIdValidation, createItemValidation, updateItem); // ✅
router.delete("/:id", getItemByIdValidation, deleteItem); // ✅

module.exports = router;
