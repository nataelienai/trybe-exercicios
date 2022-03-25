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

const getById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);

  if (users.length === 0) return null;
  return users[0];
};

const update = async ({ id, firstName, lastName, email, password }) => {
  await connection.execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
