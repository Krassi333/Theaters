const Play = require('../models/Play');

async function getAllPlays() {
    return Play.find({}).collation({ locale: 'en', strength: 2 }).lean();
}

module.exports = {
    getAllPlays,
    createPlay
}