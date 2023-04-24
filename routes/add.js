const express = require('express');
const path = require('path');
const server = require('../database/db.config');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/', (request, respond) => {
    respond.sendFile(path.join(__dirname, '../public/pages/add.html'));
});

router.post('/add', (request, respond) => {
    var nameTaken = request.body.name;
    var surnameTaken = request.body.surname;
    var optTaken = request.body.skills;

    var sql = 'INSERT INTO user (ID, user, surname, skills) VALUES (NULL, ?, ?, ?)';

    server.query(sql, [nameTaken, surnameTaken, optTaken], (err, res, field) => {
        if(!err) {
            try {
                console.log('Credentials added!\n ' + nameTaken + surnameTaken + optTaken);
                respond.redirect('/');
            } catch(err) {
                console.log('Something gone wrong' + err);
            }
        } else {
            console.log(err);
        }
    });
});

module.exports = router;