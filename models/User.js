const { Schema, model, Types } = require('mongoose');
const Play = require('./Play');

const userShema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    playes: { type: [Types.ObjectId], ref: 'Play', default: [] }
});

userShema.index({ username: 1 }, {
    locale: 'en',
    strength: 2
});

const User = model('User', userShema);

module.exports = User;