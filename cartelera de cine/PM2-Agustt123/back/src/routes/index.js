//definimos rutas a traves de las cuales nos podemos comunicnar 

//tengo definidad la solicitud a Get /user

//lo define el controlador 

const movieRouter = require("./movieRoutes"); // Importa el enrutador de películas

const router = Router();

router.use("/movies", movieRouter); // Monta el enrutador de películas


module.exports = router;
