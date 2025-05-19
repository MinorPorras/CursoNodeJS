const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a string",
    invalid_string_error: "Title must be a string",
    required_error: "Title is required: Please check url for more information",
  }),
  year: z
    .number({
      invalid_type_error: "Year must be a number",
      required_error: "Year is required: Please check url for more information",
    })
    .int()
    .min(1900)
    .max(2025),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z
    .string()
    .url({ message: "Poster must be a valid URL" })
    .endsWith(".jpg", ".png", ".jpeg"),
  genre: z.array(
    z.enum([
      "Action",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Crime",
      "Adventure",
      "Romance",
    ]),
    {
      invalid_type_error: "Genre must be an array of strings",
      required_error:
        "Genre is required: Please check url for more information",
    }
  ),
  rate: z.number().min(0).max(10).default(0),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

module.exports = {
  validateMovie,
};
