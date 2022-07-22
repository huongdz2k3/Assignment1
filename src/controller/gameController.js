const Game = require('./../model/Game')
const mongoose = require('mongoose');
const FvGame = require('./../model/FavoriteGame')

exports.getUserId = async (req, res, next) => {
    console.log(req.params.userId)
    next()
}

exports.createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body)
        return res.status(200).json({
            data: game
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

exports.getOneGame = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params);
        const game = await Game.findOne({ _id: id })
        return res.status(200).json({
            data: game
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

exports.createFvGame = async (req, res) => {
    try {
        console.log(req.params)
        console.log(req.userId)

    } catch (err) {
        // console.log(err)
        res.status(400).json({
            err
        })
    }
}



