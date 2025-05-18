const express = require("express");
const moviesData = require("./movies.json");
const movies = moviesData.movies;

const app = express();
app.disable("x-powered-by"); //Desactiva el header x-powered-by

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
//Todos los recursos que sean MOVIES se identifican por medio de esta ruta
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  //Si se recibe un query string con el género, se filtran las películas
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  //Se usa el :id para identificar el recurso
  //El id se puede obtener de la siguiente manera
  const { id } = req.params;
  //Se busca la película por medio del id
  const movie = movies.find((movie) => movie.id === id);
  //Si no se encuentra la película, se devuelve un error 404
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto http://localhost:${PORT}`);
});
