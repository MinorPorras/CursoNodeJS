const express = require("express");
const app = express();
const ditto = require("./pkm/ditto.json");
const marowak = require("./pkm/marowak.json");

app.disable("x-powered-by"); //Desactiva el header x-powered-by

const PORT = process.env.PORT ?? 3000;

// app.use('/pokemon/*', (req, res, next) => {
//   console.log(`Petición recibida: ${req.method} ${req.url}`);
//   next();
// });

app.use(express.json()); //Middleware para parsear el body de las peticiones a JSON

// app.use((req, res, next) => {
//   console.log(`Petición recibida: ${req.method} ${req.url}`);
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   //Aquí solo llegan request que son post y son con content-type application/json
//   let body = "";
//   //Se lee la información y se asigna al body
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   //Cuando se termina de leer la información
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Inicio</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(ditto);
});

app.get("/pokemon/marowak", (req, res) => {
  res.status(200).json(marowak);
});

app.post("/pokemon", (req, res) => {
  res.status(200).json(req.body);
});

//La última ala que se llegará, en caso de que no se encuentre la ruta
//Funciona como un * que se usa sin importar el método
app.use((req, res) => {
  res.status(404).send("<h1>404: Pokemon not found</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto http://localhost:${PORT}`);
});
