const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3330;

const route = require('./routes');

// Get folder public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// POST body-parser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// routes/index.js
route(app);

app.listen(port, ()=> (console.log(port)));
