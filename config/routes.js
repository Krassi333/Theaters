const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const playController = require('../controllers/playController');

module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/play', playController);
}