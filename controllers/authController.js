const { register, login } = require('../services/authService');
const errorParser = require('../utils/errorParser');

const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register', {
        title: "Register Page"
    })
});

router.post('/register', async (req, res) => {

    try {
        if (req.body.passwprd != req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        const token = await register(req.body.username, req.body.password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (err) {
        const errors = errorParser(err);
        res.render('register', {
            title: "Register Page",
            errors,
            username: req.body.username
        });
    }

});

router.get('/login', (req, res) => {
    res.render('login', {
        title: "Login Page"
    })
});

router.post('/login', async (req, res) => {

    try {
        const token = await login(req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (err) {
        const errors = errorParser(err);

        res.render('login', {
            title: "Login Page",
            errors,
            username: req.body.username
        });
    }


})

module.exports = router;