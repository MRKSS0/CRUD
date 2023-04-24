const express = require('express');
const server = require('../database/db.config');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/', (request, respond) => {

    var sql = 'SELECT * FROM user';

    server.query(sql, (err, res, field) => {
        respond.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Homepage</title><link rel="stylesheet" href="/css/bootstrap.min.css"></head><body class="bg-dark-subtle"><div class="container-xxl mt-5"><nav class="navbar bg-dark"><div class="container"><a class="navbar-brand text-white" href="#">CRUD Operations</a></div></nav><div class="card" style="width:100%;border-radius:0"><div class="card-body"><h5 class="card-title">Here the table of users:</h5><table class="table table-dark table-striped-columns"><thead><tr><th>Name</th><th>Surname</th><th>Skills</th><th>Delete</th><th>Edit</th></tr></thead><tbody>');
        for(var i=0;i<res.length;i++) {
            respond.write('<tr><th>'+res[i].user+'</th><th>'+res[i].surname+'</th><th>'+res[i].skills+'</th><th><a href="delete?id='+res[i].ID+'">🗑️</a></th><th><a href="editor?id='+res[i].ID+'">📝</a></th></tr>'); 
        }
        respond.write('</tbody></table><div class="d-flex justify-content-center"><a href="add"><button style="border-radius:0;width:150px" type="button" class="btn btn-success">Add</button></a></div></div></div></div></body></html>');
        respond.end();
    });  
});

module.exports = router;