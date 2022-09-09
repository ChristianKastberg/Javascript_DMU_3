const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', 'templates');

class Kunde {
    constructor(nr, navn, adresse) {
        this.nr = nr;
        this.navn = navn;
        this.adresse = adresse;
    }
}

const kunder = [];

for (let i = 1; i<10; i++)
    kunder.push(new Kunde(i, 'Navn '+ i, 'Adresse '+ i));

app.use(express.static('filer'));
app.use(express.json());

app.get('/', function (request, response) {
    response.render('index', {kunder});
});

app.get('/:nr', function (request, response) {
    let nr = request.params.nr.slice(2) - 1;
    response.send({adresse: kunder[nr].adresse});
});

// OBS virker kun hvis du åbner projektet for sig selv... nogen med fil stien der fucker 

app.listen(8080);

console.log('Lytter på port 8080 ...');
