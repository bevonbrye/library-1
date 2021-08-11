const chalk = require('chalk');
const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')


const app = express();


// Middleware: 
app.use(morgan('tiny'))


app.get('/', function (req, res) {
    // path allows me to bypass the concantination 
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.listen(3000, function () {
    debug(`listening on port ${chalk.blue(3000)}`)
})