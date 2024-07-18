// src/db/connection.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect()
  .then(() => console.log('Connected to AWS RDS'))
  .catch(err => console.error('Connection error', err.stack));

async function testConnection() {
  try {
    const res = await client.query('SELECT NOW()');
    console.log('Database Time:', res.rows[0]);
  } catch (err) {
    console.error('Query error', err.stack);
  } finally {
    client.end();
  }
}

testConnection();

module.exports = client;

