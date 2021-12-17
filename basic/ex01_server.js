const http = require('http');
const { listenerCount } = require('process');
http.createServer((request, response) => {
    console.log('Server start!');
}).listen(8080);