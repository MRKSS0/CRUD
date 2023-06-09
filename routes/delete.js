const express = require('express');
const server = require('../database/db.config');
const router = express.Router();

router.get('/', (request, respond) => {
    var idTaken = request.query.id;
    var sql = 'DELETE FROM user WHERE id = ?';

    server.query(sql, [idTaken], (err, res, fields) => {
        if(!err) {
            try {
                console.log('User ID ' + idTaken + ' deleted.');
    
                respond.redirect('/')
            } catch(err) {
                console.log('Something gone wrong: ' + err);
            }
        } else {
            console.log(err);
        }
    });
});

module.exports = router;