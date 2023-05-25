const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'ertyuh23456bnm,8675@#nb^%9';

async function register(username, password) {
    const existingUser = await User.findOne({ username: username }).collation({ locale: 'en', strength: 2 });

    if (existingUser) {
        throw new Error('Username is taken !');
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        username: username,
        password: hashedPass
    });
    
    const token = createToken(user);

    return token;
};

async function login(username, password) {
    const user = User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Invalid username or password!');
    }
   //console.log(password)
    //console.log(user.password);
    ;
    const passCheck = await bcrypt.compare(password, user.password);

    if (!passCheck) {
        throw new Error('Invalid username or password!');
    }

    const token = createToken(user);
    return token;
}

module.exports = {
    register,
    veryfyToken,
    login
}