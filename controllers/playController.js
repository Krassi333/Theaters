const { createPlay } = require('../services/playServices');
const errorParser = require('../utils/errorParser');

const router = require('express').Router();


router.get('/create', (req, res) => {
    res.render('create-theater', {
        title: 'Create Page'
    })
});

module.exports = router;
