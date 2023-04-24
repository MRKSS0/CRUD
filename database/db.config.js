const mysql = require('mysql');

const server = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

server.connect((err) => {
    if(!err) {
        try {
            console.log('Database connected!');
        } catch(err) {
            console.log('Something gone wrong' + err);
        } 
    } else {
        console.log(err);
    }
});

module.exports = server;