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

require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

app.use(express.static(path.join(__dirname, 'public')))

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.send('Hello World & Ha Cao Vi ')
})

app.get("/abc", (req, res) => {
    res.send('Check ABC');
})

app.get('/ICao', (req, res) => {
    // res.send(`<h1>I'm Ha Cao Vi</h1>`)
    res.render('sample.ejs');
})

app.listen(port, hostname, () => {
    console.log(`Example app listening in port : ${port}`);
})