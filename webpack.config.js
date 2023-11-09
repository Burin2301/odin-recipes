const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                // MODULO PARA CARGA CSS
                test: /\.css/i,
                use : ["style-loader", "css-loader"],
            },
            {
                // MODULO PARA CARGA IMAGENES
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: "asset/resource"
            }


        ]
    }
}