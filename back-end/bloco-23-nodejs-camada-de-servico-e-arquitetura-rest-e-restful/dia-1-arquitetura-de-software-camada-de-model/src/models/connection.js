const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  port: 3307,
  database: 'users_crud',
});

module.exports = connection;
