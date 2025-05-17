const fs = require('node:fs');

//Obtener la información y estadisticas de un archivo
const stats = fs.statSync('./texto.txt');
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSocket(),
    stats.isSymbolicLink(),
    stats.size
); // true

//leer un archivo de texto asíncrono con callback
// El primer argumento es la ruta del archivo, el segundo es la codificación y el tercero es el callback
fs.readFile('./texto.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


//Leer un archivo de texto síncrono
const data2 = fs.readFileSync('./texto.txt', 'utf-8');
console.log(data2);

