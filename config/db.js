const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({ 
    host: process.env.DB_HOST || 'localhost', 
    port: process.env.DB_PORT || 5432, // Use process.env.DB_PORT if defined
    database: process.env.DB_NAME || 'OnlineBookStore_db',
    user: process.env.DB_USER || 'postgres', 
    password: process.env.DB_PASS || 'your_password' 
}); 

module.exports = db;
