const mysql = require('mysql2/promise');
// const process = require('dotenv').config();

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cep_lookup',
});

module.exports = connection;