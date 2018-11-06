

// const http = require('http');

// let time = new Date();
// let h = time.getHours();
// let m = time.getMinutes();
// let s = time.getSeconds();
// http.createServer( (req, res) => {
//     res.write(`${h}: ${m}:${s}`);
//     res.end();
// }).listen(9000)

const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');

let app = express();
let port = 3000;

app.use( express.static ('public') );
app.use( express.static ('src/views') );

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendfile( path.join( __dirname, '/views/', '/index.html') );
})

app.get('/product', (req, res) => {
    res.send('Hello Products');
})

app.listen(port, (err) => {
    // console.log(`listening on port - ${port}`);
    debug(`listening on port - ${chalk.blue(port)}`);
})