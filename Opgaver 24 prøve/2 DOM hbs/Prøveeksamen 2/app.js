const express = require('express');
const app = express();

app.use(express.static(__dirname + '/filer'));

app.listen(8080);

console.log('Lytter på port 8080 ...');
