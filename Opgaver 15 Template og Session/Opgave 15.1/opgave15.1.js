// opgave15.1.js - opgave13.1 
// hbs på server
const express = require('express');
const app = express();
const fs = require('fs').promises;
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/templates');

app.use(express.static(__dirname + '/filer'));

app.get('/', async (request, response) => {
    let filnavne = await fs.readdir(__dirname + '/filer');
    response.render('index15.1.hbs', {
        title: 'Opgave 15.1',
        filnavne
    });
});

app.listen(8080);

console.log('Lytter på port 8080 ...');