const express = require("express")
const router = express.Router();
const fs = require("fs")

const PATH_ROUTES = __dirname;

const removeFileExtension = (filename) => {
    return filename.split(".").slice(0, -1).join(".")
}

/**
 * cargamos todos los archivos de rutas de forma
 * dinamica leyendo sus archivos con fs 
 */

fs.readdirSync(PATH_ROUTES).forEach((file) => {
    const name = removeFileExtension(file)
    if(name !== 'index') {
        console.log(`cargando ruta ${name}`);
        router.use(`/${name}`, require(`./${name}`))
    }
})

module.exports = router