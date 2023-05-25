const {verifyToken}=require('../services/authService');

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;
console.log('cookie '+token);
    if (token) {
        try {
            const userData = verifyToken(token);
            console.log('userData '+userData);
            req.user = userData;


        } catch (err) {
            console.log('session err ');
            res.clearCookie('token');
            res.redirect('/auth/login');
        }
    }
    next();
}