const User = require('./../model/User')
const mongoose = require('mongoose');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}
exports.getOneUser = async (req, res, next) => {
    try {
        let id = mongoose.Types.ObjectId(req.params);
        const user = await User.findOne({ _id: id }).populate({
            path: 'FavoriteGame',
            populate: {
                path: 'Game'
            }
        })
        res.status(200).json({
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}