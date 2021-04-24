# React-Webpack_basico
Proyecto configurado usando Webpack y Babel para mostrar por pantalla un saludo a traves de componentes de React.

## Pasos para replicar el proyecto
1.  Crear archivo base de html y enlazar la salida de webpack 
> <script src="dist/bundle.js"></script>
2. Crear Archivo package.json
> npm init -y
3. Crear fichero de git para el control de versiones
> git init
4. Instalar dependencias de desarrollo
```
npm install -D webpack webpack-cli html-webpack-plugin
npm install -D react react-dom
```
5. Crear archivo configuracion webpack
6. Crear archivos index.js, saludo.js y llamado al contedor del html
> <div id="..."></div>
7. Instalar babel 
```
npm install -D @babel/core babel-loader html-loader
npm install -D @babel/preset-env @babel/preset-react
```
8. Asignar reglas al archivo de configuracion de webpack
9. Crear archivo de configuracion de babel
```
{
  "presets": [
    "@babel/preset-env",   // Compila ES5 y ES6
    "@babel/preset-react"  // Compila JSX y sintaxis de React
  ]
}
```
10. Agregar los scipts al archivo package para compilar nuestro proyecto
```
"scripts": {
  "build": "webpack --mode production"
}
```
