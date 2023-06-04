const { getAllPlays } = require('../services/playServices');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const user = req.user;
    let view = '';

    if (user) {
        view = 'user-home';
    } else {
        view = 'guest-home';
    }

    const plays=await getAllPlays();

    res.render(view, {
        title: "Home Page",
        user,
        plays
    });
});

module.exports = router;