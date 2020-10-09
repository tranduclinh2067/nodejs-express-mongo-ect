const newsRoute = require('./news');
const siteRoute = require('./site');


routes = function (app) {
        
    app.use('/news', newsRoute)
    app.use('/search', siteRoute);
    app.use('/', siteRoute);
    
    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send();
    // });
    
};

module.exports = routes;