const fs = require("node:fs/promises");
const path = require("node:path");
const pic = require("picocolors");

//Carpeta en la que queremos listar los archivos
const folder = process.argv[2] ?? "."; // Si no se pasa una carpeta, se usa la carpeta actual
//Posición 0 = node, 1 = ruta del archivo, 2 = primer archivo o directorio

async function ls(dir) {
  let files;
  try {
    files = await fs.readdir(folder); // Lee el contenido de la carpeta
  } catch (err) {
    console.error(pic.red("No se ha podido leer el directorio: " + folder));
    process.exit(1); // Salimos con error
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file); // Une la carpeta con el nombre del archivo
    let stats; // Variable para almacenar la información del archivo
    try {
      stats = await fs.stat(filePath); // Obtiene la información del archivo
    } catch (err) {
      console.error(pic.red("No se ha podido leer el archivo: " + filePath));
      process.exit(1); // Salimos con error
    }

    const fileType = stats.isDirectory() ? "d" : "f"; // Tipo de archivo (directorio o archivo)
    const size = stats.size; // Tamaño del archivo o directorio
    const fileModified = stats.mtime.toLocaleString(); // Fecha de modificación del archivo o directorio

    return `${fileType} ${pic.magenta(file.padEnd(20))} ${pic.blue(
      size.toString().padStart(10)
    )} ${pic.cyan(fileModified)}`; // Devuelve la información del archivo o directorio
  });
  const fileInfos = await Promise.all(filePromises); // Espera a que se resuelvan todas las promesas
  console.log(
    `T ${pic.magenta("nombre".padEnd(20))} ${pic.blue(
      "tamaño".padStart(10)
    )} ${pic.cyan("modificado")}`
  ); // Imprime el contenido de la carpeta
  fileInfos.forEach((fileInfo) => {
    console.log(fileInfo); // Imprime la información del archivo o directorio});
  });
}

ls(folder);
