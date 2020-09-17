const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3330;

// Get folder public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

app.get('/', (req, res) => {
    res.render('home');
    }
);

app.get('/news', (req, res) => {
    console.log(req.query.q);
    res.render('news');
});

// app.post('/news', (req, res) => {
//     // console.log(req.query.q);
//     res.render('news');
// });

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, ()=> (console.log(port)));