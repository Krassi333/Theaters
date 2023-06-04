const { createPlay } = require('../services/playServices');
const errorParser = require('../utils/errorParser');

const router = require('express').Router();


router.get('/create', (req, res) => {
    res.render('create-theater', {
        title: 'Create Page'
    })
});

router.post('/create', async (req, res) => {
    const data = req.body;

    try {
        await createPlay(data);
        res.redirect('/')
    } catch (err) {
        const errors = errorParser(err);
        res.render('create-theater', {
            title: 'Create Page',
            errors,
            data
        })
    }
})

module.exports = router;
