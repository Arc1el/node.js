const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
const route = require('./ex10_route.js');

app.set('view engine', 'pug');
app.set('views', path.join(path.join(__dirname, 'pugs')));

db();

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});