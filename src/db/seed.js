#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 2000 ),
  added TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Bryan', 'Hi there!', '2026-10-27T10:00:00'),
  ('Odin', 'Hello World!', '2026-10-27T10:00:00');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();