import { readFile } from 'node:fs/promises';

//leer un archivo de texto asíncrono con callback
// El primer argumento es la ruta del archivo, el segundo es la codificación y el tercero es el callback


console.log('Leyendo archivo de texto 1...');
const text = await readFile('./texto.txt', 'utf-8')
console.log(text);

console.log('--> Haciendo otra cosa...'); // Simulación de hacer otra cosa mientras se lee el archivo

//Segundo archivo
console.log('Leyendo archivo de texto 2...');
const text2 = await readFile('./texto2.txt', 'utf-8')
console.log(text2);
