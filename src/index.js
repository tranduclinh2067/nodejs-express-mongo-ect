const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3330;

// Get folder public
app.use(express.static(path.join(__dirname, 'public')));

// HTTp logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

app.get('/', (rep, res) => {
    res.render('home')
    }
);

app.get('/news', (rep, res) => {
    res.render('news')
});

app.get('/search', (rep, res) => {
    res.render('search')
});

app.listen(port, ()=> (console.log(port)));