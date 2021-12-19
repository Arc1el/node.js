const express = require('express');
const app = express(); //express app객체로 모든서버 일 처리

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});