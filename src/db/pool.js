const { Pool } = require("pg");

// Read from .env (loaded via `node --env-file=.env`)
module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});