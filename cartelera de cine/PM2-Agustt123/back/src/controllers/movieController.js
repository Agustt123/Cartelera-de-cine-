const movieService = require('../services/movieService');

// Controlador para manejar la solicitud GET para obtener todas las películas
const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMoviesFromDB();
        res.json(movies);
    } catch (error) {
        console.error("Error al obtener películas desde la base de datos:", error);
        res.status(500).json({ error: "Error al obtener películas desde la base de datos." });
    }
};

// Controlador para manejar la solicitud POST para crear una nueva película
const createMovie = async (req, res) => {
    const movieData = req.body;

    try {
        // Llamar a la función del servicio para crear una nueva película
        const newMovie = await movieService.createMovie(movieData);
        
        // Enviar una respuesta exitosa con la nueva película creada
        res.status(201).json({ message: "Película creada exitosamente", movie: newMovie });
    } catch (error) {
        console.error("Error al crear la película:", error);
        res.status(500).json({ error: "Error al crear la películaa." });
    }
};

module.exports = {
    getAllMovies,
    createMovie
};
