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

const serialize = (user) => ({
  id: user.id,
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  password: user.password,
});

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');

  return users.map(serialize);
};

module.exports = {
  create,
  getAll,
};
