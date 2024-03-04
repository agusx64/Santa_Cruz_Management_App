const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/js/index.js', // Corregido: Cambiado '.src/client/js/index.js' a './src/client/js/index.js'
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html' // Corregido: Cambiado '.src/client/index.html' a './src/client/index.html'
        })
    ]
};