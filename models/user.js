const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    englishLevel: {
      type: ["A1", "A2", "B1", "B2", "C1", "C2"],
    },
    technicalKnowledge: {
      type: String,
    },
    resumeUrl: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", UserScheme);
