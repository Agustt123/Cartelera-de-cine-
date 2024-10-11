// Importar y configurar dotenv para cargar las variables de entorno
require("dotenv").config();

// Importar la aplicación Express
const app = require("./src/server");

// Importar la función de conexión a la base de datos
const conDb = require("./src/config/conDb");

// Conectar a la base de datos y luego iniciar el servidor
conDb().then(() => {
    app.listen(3003, () => {
        console.log("SERVIDOR ESCUCHANDO EN EL PUERTO 3003");
    });
}).catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});
