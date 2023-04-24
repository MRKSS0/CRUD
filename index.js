/**
 * IMPORTING MODULES
 */
const express = require('express');
const path = require('path');

/**
 * FOR process.env
 */
require('dotenv').config();

/**
 * IMPORTING ROUTES
 */
const server = require('./database/db.config');
const homepage = require('./routes/homepage');
const deleteP = require('./routes/delete.js');
const editor = require('./routes/editor.js');
const add = require('./routes/add.js');

const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.use('/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')));


const port = process.env.PORT;

app.use('/', homepage);
app.use('/add', add);
app.use('/delete', deleteP);
app.use('/editor', editor);

app.listen(port, () => {
    console.log('Listening on -> ' + port);
})