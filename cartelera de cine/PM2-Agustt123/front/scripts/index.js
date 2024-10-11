const axios = require('axios');

// Importar la función renderFilms desde el archivo donde está definida
const renderFilms = require("./renderfilms");

// Cuando el documento esté listo, hacer la solicitud al servidor backend y renderizar las películas
document.addEventListener("DOMContentLoaded", async () => {
    const filmsSection = document.getElementById("films");

    try {
        // Realizar solicitud GET al servidor backend en lugar de a la API externa
        const response = await axios.get("http://localhost:3003/movies"); // Cambia la URL según la ruta de tu backend
        const movies = response.data;
        
        // Llamar a la función renderFilms para cada película recibida
        movies.forEach(movie => {
            renderFilms(movie, filmsSection);
        });
    } catch (error) {
        console.error('Error:', error);
        alert("Ha ocurrido un error al cargar los datos.");
    }
});
