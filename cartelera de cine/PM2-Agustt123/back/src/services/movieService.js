const Movie = require('../models/movieModel'); // Requerir el modelo Movie

// Función para obtener todas las películas desde la base de datos
const getAllMoviesFromDB = async () => {
    try {
        // Utilizar el método find del modelo Movie para obtener todas las películas
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        throw new Error('Error al obtener las películas desde la base de datos');
    }
};

// Función para crear una nueva película en la base de datos
const createMovie = async (data) => {
    try {
        // Crear una nueva instancia del modelo Movie con los datos recibidos
        const newMovie = new Movie(data);
        // Guardar la nueva película en la base de datos
        const savedMovie = await newMovie.save();
        return savedMovie;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la creación de la película
        throw new Error('Error al crear la película en la base de datos');
    }
};

// Exportar las funciones para poder utilizarlas en otros archivos
module.exports = {
    getAllMoviesFromDB,
    createMovie
};
