const mongoose = require('mongoose');

// Definir el esquema de la película (movie)
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: [String], required: true }, // Ahora 'genre' es un array de cadenas
    rate: { type: Number, required: true },
    poster: { type: String, required: true } // Supongo que 'poster' es una URL de la imagen de la película
});

// Crear el modelo Movie utilizando el esquema definido
const Movie = mongoose.model('Movie', movieSchema);

// Exportar el modelo Movie para poder utilizarlo en otros archivos
module.exports = Movie;
