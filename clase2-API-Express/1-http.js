//Importación de módulos
const http = require("node:http");
const fs = require("node:fs");

//Importación de variables de entorno
const desiredPort = process.env.PORT ?? 3000;

//Función que procesa la petición
const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8"); //text/html, aplication/json
  if (req.url === "/") {
    //Página de inicio
    res.statusCode = 200;
    res.end("<h1>Bienvenido a mi página de inicio</h1>");
  } else if (req.url === "/imagen-perfil.png") {
    //Mostrar imagen PNG
    //Se establece el tipo de contenido como imagen PNG
    fs.readFile("./fondo.png", (err, data) => {
      if (err) {
        //Si hay un error al leer el archivo
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
      } else {
        //Si se lee correctamente el archivo
        res.setHeader("Content-Type", "image/png");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    //Página de contacto
    res.statusCode = 200;
    res.end("<h1>Contact</h1>");
  } else {
    //Página no encontrada
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
};

//Se crea una servidor Http, que recibe un request y devuelve un response
const server = http.createServer(processRequest);

//Se inicia el servidor en el puerto deseado
// y se establece un callback para cuando el servidor esté listo
server.listen(desiredPort, () => {
  console.log(`Servidor escuchando el puerto http://localhost:${desiredPort}`);
});
