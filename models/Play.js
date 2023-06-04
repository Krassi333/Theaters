const { Schema, model, Types } = require('mongoose');
const User = require('./User');

const playSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, maxlength: [50, 'Description must be at most 50 characters long!'] },
    imageUrl: { type: String, required: true },
    inPublic: { type: Boolean, default: false },
    createdAt: { type: String, required: true },
    users: { type: [Types.ObjectId], ref: 'User', default: [] },
    likes: { type: Number, default: 0 }
});

playSchema.index({ title: 1 }, {
    locale: 'en',
    strength: 2
});

const Play = model('Play', playSchema);

module.exports = Play;