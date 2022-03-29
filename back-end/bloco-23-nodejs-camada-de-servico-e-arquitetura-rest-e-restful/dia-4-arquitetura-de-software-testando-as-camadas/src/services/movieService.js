const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  return Boolean(
    title && typeof title === 'string'
    && releaseYear && typeof releaseYear === 'number'
    && directedBy && typeof directedBy === 'string'
  );
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });
  return { id };
};

module.exports = {
  create,
};