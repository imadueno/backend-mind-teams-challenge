// 1. requerir mongose
const mongoose = require("mongoose");

// 2. crear schema
const LoggerScheme = new mongoose.Schema(
  {
    method: {
      type: String,
    },
    request: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("logger", LoggerScheme);
