const { Pool } = require("pg");

// Read from .env (loaded via `node --env-file=.env`)
module.exports = new Pool({ connectionString: process.env.DATABASE_URL });
