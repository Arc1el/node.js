const { on } = require('events');
const http = require('http');
http.createServer((request, response) => {
    return request
    .on('error', (err) => { //request에 error가 있는경우
        console.error(err);
    })
    .on('data', (data) => { //request에 data가 있으면
        console.log(data);
    })
    .on('end', () => { //request의 data가 모두 받아졌으면
        response.on('error', (err) => { //response에 error가 있으면
            console.error(err);
        });
        response.statusCode = 200; //statusCode 200 success
        response.setHeader('Content-Type', 'text/plain');
        response.write('hi\n');
        response.end('the end!');
    });
}).listen(8080);