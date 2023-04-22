const express = require('express');
const path = require('path');
const server = require('../database/db.config');
const router = express.Router();

router.get('/', (request, respond) => {
    var idTaken = request.query.id;
    var sql = 'DELETE FROM user WHERE id = ?';

    try {
        server.query(sql, [idTaken], (err, res, fields) => {
            console.log('User ID ' + idTaken + ' deleted.');

            respond.redirect('/')
        });
    } catch(error) {
        console.log('Something gone wrong' + error);
    }
});

module.exports = router;