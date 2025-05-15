const http = require("node:http");
const fs = require("node:fs");
const ditto = require("./pkm/ditto.json");
const marowak = require("./pkm/marowak.json");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.statusCode = 200;
          res.end(JSON.stringify(ditto));
          break;
        case "/pokemon/marowak":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.statusCode = 200;
          res.end(JSON.stringify(marowak));
          break;
        default:
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.statusCode = 404;
          res.end("<h1>Pokemon not found</h1>");
          break;
      }

    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            const data = JSON.parse(body);
            res.writeHead(201, {
              "Content-Type": "application/json charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;
        default:
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.statusCode = 404;
          res.end("<h1>404: Pokemon not found</h1>");
          break;
      }
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando el puerto http://localhost:3000");
});
