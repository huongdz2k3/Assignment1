const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    }, createAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

userSchema.virtual('FavoriteGame', {
    ref: 'FvGame',
    foreignField: 'user',
    localField: '_id'
})

const User = mongoose.model('User', userSchema)

module.exports = User