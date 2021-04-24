const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // Elegimos nuestro punto de entrada
  entry: './src/index.js',
  mode: 'development',
  // Añadimos nuestro punto de salida
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Añadimos el soporte para la extencion de JSX
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Utiliza la configuracion de Babel
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ],
  },
  plugins: [  
    // utilizamos este plugin para añadir el compilado al documento HTML
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};