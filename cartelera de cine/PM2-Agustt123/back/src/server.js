const express = require('express');
require("dotenv").config();

const morgan = require('morgan');
const cors = require('cors');
const movieRouter = require('./routes/movieRoutes');
const validarCamposCompletos = require('./middleware/validacionMiddleware'); // Importa el middleware de validación
const app = express();

// Middleware
app.use(morgan('dev')); // Morgan para registrar las solicitudes HTTP en la consola
app.use(cors()); // Cors para permitir solicitudes desde otros dominios
app.use(express.json()); // express.json para parsear el cuerpo de las solicitudes como JSON

// Rutas
app.use('/', movieRouter);

// Middleware de validación de campos
app.use(validarCamposCompletos); // Agrega el middleware de validación a nivel de aplicación

module.exports = app;
