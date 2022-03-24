const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );

  return {
    id: insertId,
    firstName,
    lastName,
    email,
    password,
  };
};

module.exports = {
  create,
};
