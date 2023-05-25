const router = require('express').Router();

router.get('/', (req, res) => {
    const user = req.user;
    let view = '';
console.log(user);
    if (user) {
        view = 'user-home';
    } else {
        view = 'guest-home';
    }

    console.log(view);

    res.render(view, {
        title: "Home Page",
        user
    });
});

module.exports = router;