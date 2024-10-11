// Movie.js

class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        if (!title || !year || !director || !duration || !genre || !rate || !poster) {
            throw new Error('Se requieren todos los campos para crear una película.');
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports = Movie;
