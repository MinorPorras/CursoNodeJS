import { readFile } from 'node:fs/promises';

//leer un archivo de texto asíncrono con callback
// El primer argumento es la ruta del archivo, el segundo es la codificación y el tercero es el callback
Promise.all([
    readFile('./texto.txt', 'utf-8'),
    readFile('./texto2.txt', 'utf-8')
]).then((data) => {
    console.log(data[0]);
    console.log(data[1]);
}).catch((err) => {
    console.error(err); // Manejar el error si ocurre
})


