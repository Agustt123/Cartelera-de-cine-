const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const validarCamposCompletos = require('../middleware/validacionMiddleware'); // Importa el middleware de validación

// Configurar la ruta GET para obtener todas las películas
router.get('/movies', movieController.getAllMovies);

// Configurar la ruta POST para crear una nueva película
// Coloca el middleware antes de la definición de la ruta
router.post('/movies', validarCamposCompletos, movieController.createMovie);

module.exports = router;
