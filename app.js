require("dotenv").config();
const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/mongo");
const logger = require("./middlewares/logger");
const app = express();

/**
 * middlewares
 */
app.use(cors());
app.use(express.json());
app.use(logger);

/**
 * Rutas
 */

app.use("/api", require("./routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
});

databaseConnection();
