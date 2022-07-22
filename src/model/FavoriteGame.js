const mongoose = require('mongoose');
const User = require('./User')
const Game = require('./Game')

const fvGameSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    game: {
        type: mongoose.Schema.ObjectId,
        ref: 'Game'
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

fvGameSchema.virtual('Game', {
    ref: 'Game',
    foreignField: '_id',
    localField: 'game'
})

const FvGame = mongoose.model('FvGame', fvGameSchema)

module.exports = FvGame