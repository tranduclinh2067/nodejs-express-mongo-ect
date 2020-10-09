module.exports.news = function (req, res) {

    // [GET] /news
    res.render('news');

};

module.exports.showSlug = function (req, res) {
    
    // [GET] /news/:slug
    res.send('News detail')

}