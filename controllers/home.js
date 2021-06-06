// Show homepage
var index = (req, res, next) => {
  res.render('index', {
    title: 'Home - ' + process.env.APP_NAME,
    brand: process.env.APP_NAME
  })
};

module.exports = {
    index    
};