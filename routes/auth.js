const express = require("express");
const { login } = require("../controllers/auth");
const router = express.Router();
const { loginValidation } = require("../validations/auth");

/**
 * rutas de autenticacion, seguridad, etc
 */
router.post("/login", loginValidation, login); // ✅

module.exports = router;
