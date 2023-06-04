const { verifyToken } = require("../services/authService");

module.exports = () => async (req, res, next) => {
    const token = req.cookies.token;
    
    if (token) {
        try {
            const userData = verifyToken(token);
            req.user = userData;

           // res.locals.username = userData.firstName;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
        }
    }
    next();
}