const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, 'html')));

app.use((req, res, next) => {
    console.log('Hello~');
    next();
})

const route = require('./ex07_route.js');

app.use('/', route);

app.use((req, res, next) => {
    res.status(404).send('file not exist!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('server error');
});

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});