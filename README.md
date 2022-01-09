# React-Webpack_basico
Proyecto configurado usando Webpack y Babel para mostrar por pantalla un saludo a través de componentes de React.

## Para descargar y correr este proyecto ejecutar en consola

```
git clone https://github.com/Maikpwwq/React-Webpack_basico.git
cd ./React-Webpack_basico
npm i 
npm run start
```
Luego abrir en nuestro navegador el archivo index.htmlm, que fue generado en la carpeta llamada dist

## Pasos para replicar el proyecto
1.  Creamos un archivo index.html ubicado en una carpeta llamada public, a donde vamos a enlazar la salida de webpack con un elemento dado su id
```
<div id="saludo"></div>
<script src="dist/bundle.js"></script>
```
2. Creamos el Archivo package.json para administrar la instalación de dependencias del proyecto
> npm init -y
3. Creamos el fichero de git para el control de versiones del proyecto
> git init
4. Instalar dependencias de desarrollo
```
npm install -D webpack webpack-cli html-webpack-plugin
npm install react react-dom
```
5. Creamos un archivo configuración llamado webpack.config.js según observamos en la documentación oficial de webpack https://webpack.js.org/concepts/configuration/ 
6. Creamos dentro de una carpeta llamada src dos archivos; index.js y saludo.js. En index.js crearemos un objeto con reactDom que será el componente de React, deberemos inyectarlo haciendo uso del id definido para el elemento del paso numero uno. Y en saludo.js una clase de react con un mensaje que dara un saludo de bienvenida el cual luego importaremos en el index.js.
7. Instalar babel para traspilar el código moderno en un código que puedan soportar navegadores más antiguos https://babeljs.io/docs/en/#jsx-and-react 
```
npm install -D @babel/core babel-loader html-loader
npm install -D @babel/preset-env @babel/preset-react
```
8. Asignamos las reglas para la manipulación de ficheros al archivo de configuración de webpack
9. Crear el archivo de configuración de babel para usarse con React
```
{
  "presets": [
    "@babel/preset-env",   // Compila ES5 y ES6
    "@babel/preset-react"  // Compila JSX y sintaxis de React
  ]
}
```
10. Agregamos los scipts al archivo package para compilar nuestro proyecto
```
"scripts": {
  "build": "webpack --mode production"
}
```
Para finalizar ahora podremos configurar un servidor, como es webpack-dev-serve https://webpack.js.org/api/webpack-dev-server/#root, nodemon, express o koa, para así correr nuestro proyecto de forma local.