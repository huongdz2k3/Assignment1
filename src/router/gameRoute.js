const Game = require('./../model/Game')
const route = require('express').Router()
const gameController = require('./../controller/gameController')
route.route('/').post(gameController.createGame)



module.exports = route
