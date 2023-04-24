const express = require('express');
const server = require('../database/db.config');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/', (request, respond) => {
    var idTaken = request.query.id;
    var sql = 'SELECT * FROM user WHERE id = ?';

    server.query(sql, [idTaken], (err, res, field) => {
        if(!err) {
            try {
                respond.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Edit | Edit users!</title><link rel="stylesheet" href="/css/bootstrap.min.css"></head><body class="bg-dark-subtle"><div class="container-xxl mt-5"><nav class="navbar bg-dark"><div class="container"><a class="navbar-brand text-white" href="#">CRUD Operations | Editing users</a></div></nav><div class="card" style="width:100%;border-radius:0"><div class="card-body"><h5 class="card-title">Edit credentials:</h5><div class="d-flex justify-content-center"><form action="/editor/edit" method="POST"><div class="mb-3"><div class="mb-3"><label for="id" class="form-label">Currently ID editing</label><input readonly name="id" type="text" value="'+res[0].ID+'" class="form-control"></div><label for="name" class="form-label">Edit name here</label><input name="name" type="text" value="'+res[0].user+'" class="form-control"></div><div class="mb-3"><label for="surname" class="form-label">Edit usurname here</label><input name="surname" type="text" value="'+res[0].surname+'" class="form-control"></div><select name="skills" class="form-select form-select-lg mb-3"><option selected="selected">Select skills</option><option value="PHP">PHP</option><option value="JS">JS</option></select><button name="add" style="border-radius:0;width:100%" type="submit" class="btn btn-success">Add</button></form></div></div></div></div></body></html>');
            } catch {
                console.log('You\'re trying to access again ID but without link.');
                respond.redirect('/');
            }
        } else {
            console.log(err);
        }
    });
});

router.post('/edit', (request, respond) => {
    var sqlU = 'UPDATE user SET user = ?, surname = ?, skills = ? WHERE ID = ?';
    
    var idTaken = request.body.id;
    var nameTaken = request.body.name;
    var surnameTaken = request.body.surname;
    var skillsTaken = request.body.skills;

    server.query(sqlU, [nameTaken, surnameTaken, skillsTaken, idTaken], (err, res, fields) => {
        if(!err) {
            try {
                console.log('User updated!');
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