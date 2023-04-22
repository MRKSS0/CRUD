const mysql = require('mysql');
require('dotenv').config();

const server = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

server.connect((err) => {
    if(err) throw err;
    else console.log('Database connected!');
});

module.exports = server;