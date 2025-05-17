const fs = require('node:fs/promises'); // Importar el módulo fs de Node.js para trabajar con el sistema de archivos

//leer un archivo de texto asíncrono con callback
// El primer argumento es la ruta del archivo, el segundo es la codificación y el tercero es el callback
console.log('Leyendo archivo de texto 1...');
fs.readFile('./texto.txt', 'utf-8')
    .then((data) => {
        console.log(data); // Imprimir el contenido del archivo en la consola
    }).catch((err) => {
        console.error(err); // Manejar el error si ocurre
    })

console.log('--> Haciendo otra cosa...'); // Simulación de hacer otra cosa mientras se lee el archivo


//Leer un archivo de texto síncrono
// El primer argumento es la ruta del archivo, el segundo es la codificación y el tercero es el callback
console.log('Leyendo archivo de texto 2...');
fs.readFile('./texto2.txt', 'utf-8')
    .then((data) => {
        console.log(data); // Imprimir el contenido del archivo en la consola
    }).catch((err) => {
        console.error(err); // Manejar el error si ocurre
    })

