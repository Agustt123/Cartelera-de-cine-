function renderFilms(movie, filmsSection) { // Recibir filmsSection como argumento
    const movieElement = document.createElement("article");
    const containerMovie = document.createElement("div");

    movieElement.classList.add("pelicula-card");
    containerMovie.classList.add("pelicula-info");

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    movieElement.appendChild(img);

    containerMovie.innerHTML = `
        <h3>${movie.title} - (${movie.year})</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duración:</strong> ${movie.duration}</p>
        <p><strong>Género:</strong> ${movie.genre.join(", ")}</p>
        <p><strong>Rate:</strong> ${movie.rate}</p>
    `;
    movieElement?.appendChild(containerMovie);

    filmsSection.appendChild(movieElement);
}

module.exports = renderFilms;


