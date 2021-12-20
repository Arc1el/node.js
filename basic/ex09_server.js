const express = require('express');
const path = require('path');
const app = express();
const route = require('./ex09_route.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'pugs'));

app.use(express.static(path.join(__dirname, 'pugs')));
app.use('/', route);

app.listen(8080, () => {
    console.log('Express App on port 8080!');
})