const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => { //콜백
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

app.get('/about', (req, res) => { //콜백
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});