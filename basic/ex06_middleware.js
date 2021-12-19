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

app.get('/', (req, res) => { //콜백
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

app.get('/about', (req, res) => { //콜백
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.get('/post/:id', () => {}); //와일드 카드를 활용한 라우팅 가능

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});