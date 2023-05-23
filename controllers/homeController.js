const router = require('express').Router();

router.get('/', (req, res) => {
    const user = req.user;
    const view = user ? 'user-home' : 'guest-home';

    res.render(view, {
        title: "Home Page"
    });
});

module.exports = router;