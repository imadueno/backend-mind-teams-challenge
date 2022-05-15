require("dotenv").config();
const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/mongo");
const app = express();

/**
 * middlewares
 */
app.use(cors());
app.use(express.json());

/**
 * Rutas
 */

const mwl = (req, res, next) => {
  // crear un modelo que tenga los sig campos:
  // fecha y hora
  // url tipo peticion, endpoint solicitado
  // usuario si está registrado o logeado
  console.log("loggerrrr");
  next();
};

app.use(mwl);
app.use("/api", require("./routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
});

databaseConnection();
