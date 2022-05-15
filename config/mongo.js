const mongoose = require("mongoose")

const databaseConnection = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(
        DB_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if(!err) {
                console.log("mongo conecction ready !")
            } else {
                console.log("Can not connect mongo database :(")
            }
        }
    );
}

module.exports = databaseConnection