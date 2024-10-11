module.exports = {
    entry: {
        index: "./scripts/index.js",
        formulario: "./scripts/formulario.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    },
};
