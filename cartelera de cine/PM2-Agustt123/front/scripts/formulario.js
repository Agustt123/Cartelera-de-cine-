import axios from "axios";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("crear-pelicula-form");

    document.getElementById("limpiar").addEventListener("click", function() {
        form.reset();
    });

    document.getElementById("rate").addEventListener("input", function() {
        document.getElementById("rateOutput").textContent = this.value;
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var formIsValid = true;
        form.querySelectorAll("input, select").forEach(function(input) {
            if (!input.value) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            // Obtener los valores seleccionados de los checkboxes de género
            const genreArray = [];
            form.querySelectorAll("input[name='genre']:checked").forEach(function(checkbox) {
                genreArray.push(checkbox.value);
            });

            // Construir el objeto de datos manualmente
            const formDataObject = {
                title: form.querySelector("#title").value,
                year: form.querySelector("#year").value,
                director: form.querySelector("#director").value,
                rate: form.querySelector("#rate").value,
                poster: form.querySelector("#poster").value,
                duration: form.querySelector("#hours").value + "hrs " + form.querySelector("#minutes").value + "min",
                genre: genreArray
            };

            console.log(formDataObject);

            // Enviar los datos utilizando Axios
            axios.post('http://localhost:3003/movies', formDataObject)
                .then(response => {
                    console.log('La película ha sido creada:', response.data);
                    alert("¡La película ha sido enviada a la base de datos!");
                    form.reset();
                })
                .catch(error => {
                    console.error('Error al crear la película:', error);
                    alert("¡Error al crear la película. Por favor, inténtalo de nuevo!");
                });
        } else {
            alert("Por favor completa todos los campos");
        }
    });
});
