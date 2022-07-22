const FvGame = require('./../model/FavoriteGame')
const User = require('./../model/User')
const Game = require('./../model/Game')
const mongoose = require('mongoose');

exports.createFvList = async (req, res) => {
    try {
        const { userId, gameId } = req.params
        const userObj = mongoose.Types.ObjectId(userId)
        const user = await User.findOne({ _id: userObj })
        if (!user) {
            return res.status(400).json({
                mess: "User does not exists"
            })
        }
        const gameObj = mongoose.Types.ObjectId(gameId)
        const game = await Game.findOne({ _id: gameObj })
        if (!game) {
            return res.status(400).json({
                mess: "Game does not exists"
            })
        }
        const gameLiked = await FvGame.findOne({ game: gameObj, user: userObj })
        if (gameLiked) {
            return res.status(400).json({
                mess: "You already add this game"
            })
        }
        const fvGame = FvGame.create({ user: userObj, game: gameObj })
        return res.status(200).json({
            fvGame
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

exports.deleteOneGame = async (req, res) => {
    try {
        const { userId, gameId } = req.params
        const userObj = mongoose.Types.ObjectId(userId)
        const user = await User.findOne({ _id: userObj })
        if (!user) {
            return res.status(400).json({
                mess: "User does not exists"
            })
        }
        const gameObj = mongoose.Types.ObjectId(gameId)
        const game = await Game.findOne({ _id: gameObj })
        if (!game) {
            return res.status(400).json({
                mess: "Game does not exists"
            })
        }
        await FvGame.findOneAndDelete({ game: gameObj, user: userObj })
        return res.status(200).json({
            mess: "Delete success"
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

exports.deleteListGame = async (req, res) => {
    try {
        const userObj = mongoose.Types.ObjectId(req.params)
        await FvGame.deleteMany({ user: userObj })
        return res.status(200).json({
            mess: "Delete success"
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}