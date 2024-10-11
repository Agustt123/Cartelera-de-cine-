require("dotenv").config();
const mongoose = require("mongoose");

const conDb = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MongoDB URI no está definida en el archivo .env");
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Si aún obtienes un error relacionado con las opciones usecreateindex y usefindandmodify, intenta agregar estas opciones también:
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        console.log("Conexión exitosa a la base de datos MongoDB");
    } catch (error) {
        console.error("Error al conectar a la base de datos MongoDB:", error);
        // Si encuentras un error al conectar a la base de datos, asegúrate de que la URI de MongoDB en tu archivo .env sea correcta
    }
};

module.exports = conDb;
