const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
    [title, directedBy, releaseYear]
  );

  return { id: result.insertId };
};

const getById = async (id) => {
  const [movies] = await connection.execute(
    "SELECT * FROM model_example.movies WHERE id = ?",
    [id]
  );
  if (movies.length === 0) return null;
  return movies[0];
};

module.exports = {
  create,
  getById,
};
