const { register, login } = require('../services/authService');
const errorParser = require('../utils/errorParser');

const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register', {
        title: "Register Page"
    })
});

module.exports = router;