const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController');

route.use('/:slug', newsController.showSlug);
route.use('/', newsController.news);

module.exports = route;