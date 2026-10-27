const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages")
  return rows
}

async function searchUsernames(search) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [`%${search}%`]
  );
  return rows;
}

async function postMessage({ user, text, added }) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
    [user, text, added]
  );
}

module.exports = {
  getAllMessages,
  searchUsernames,
  postMessage,
};
