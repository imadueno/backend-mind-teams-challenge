const mongoose = require("mongoose")
const AccountScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        clientName: {
            type: String
        },
        useIdRegistration: {
            type: String
        },
        users: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("account", AccountScheme)