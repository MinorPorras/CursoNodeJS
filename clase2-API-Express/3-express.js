const express = require("express");
const app = express();
const ditto = require("./pkm/ditto.json");
const marowak = require("./pkm/marowak.json");

app.disable("x-powered-by"); //Desactiva el header x-powered-by

const PORT = process.env.PORT ?? 3000;

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
  let body = "";
  //Se lee la información y se asigna al body
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  //Cuando se termina de leer la información
  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    res.status(201).json(data);
  });
});

app.use((req, res) => {
  res.status(404).send("<h1>404: Pokemon not found</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto http://localhost:${PORT}`);
});
