// middleware/validacionMiddleware.js

// Middleware para validar que todos los campos estén completos y que el año tenga 4 dígitos
function validarCamposCompletos(req, res, next) {
    const datos = req.body; // Obtener los datos del cuerpo de la solicitud

    // Verificar si todos los campos están presentes y no son nulos ni vacíos
    for (const key in datos) {
        if (datos.hasOwnProperty(key)) {
            const value = datos[key];
            if (value === null || value === undefined || value === '') {
                return res.status(400).json({ error: `El campo '${key}' es obligatorio.` });
            }
        }
    }

    // Verificar que el año sea un número de 4 dígitos
    const year = parseInt(datos.year); // Convertir el año a número
    if (isNaN(year) || year.toString().length !== 4) { // Verificar si no es un número o si no tiene 4 dígitos
        return res.status(400).json({ error: "El año debe ser un número de 4 dígitos." });
    }

    // Si todos los campos están completos, continuamos con la siguiente función de middleware
    next();
}

module.exports = validarCamposCompletos;
