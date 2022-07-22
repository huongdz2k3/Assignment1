const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})
const Game = mongoose.model('Game', GameSchema)

module.exports = Game