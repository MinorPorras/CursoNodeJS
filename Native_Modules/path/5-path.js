const path = require("path");

//Unir rutas
const filePath = path.join("carpeta1", "carpeta2", "text.txt"); // carpeta1/carpeta2/text.txt
console.log(filePath);

//Sabser cual es el separador de la ruta
console.log(path.sep); // / en linux y \ en windows

// Saber cual es el nombre del directorio actual
console.log(
  path.basename(
    "C:Users/User/Desktop/WebDevelop/CursoNodeJS/CursoNodeJS/Native_Modules/path/5-path.js"
  )
);

// Saber cual es la extension del archivo
console.log(path.extname("./Native_Modules/path/5-path.js")); // .js

