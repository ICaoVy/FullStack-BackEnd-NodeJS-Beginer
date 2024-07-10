// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello World\n Cao Vy');
// });

// server.listen(port, hostname, () => {
//     console.log(`Sever running at http://${hostname}:${port}/`);
// })

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening in port : ${port}`);
})