const express = require('express');
const router = express.Router();
const consolaController = require ('../controllers/consola')


// create, read, update, delete

// Servicio para mosttrar el eformulario
router.get('/altaConsola', consolaController.getAltaConsola );
// Servicio para procesar los datos del formulario
router.post('/altaCosnsola', consolaController.postAltaConsola);
// servicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getAltaConsola);

module.exports = router