const Play = require('../models/Play');

async function getAllPlays() {
    return Play.find({}).collation({ locale: 'en', strength: 2 }).lean();
}

async function createPlay(data) {
    return Play.create(data);
}

module.exports = {
    getAllPlays,
    createPlay
}