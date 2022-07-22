const Game = require('./../model/Game')
const route = require('express').Router()
const gameController = require('./../controller/gameController')
const validateDto = require('../JSONSchema/validate-dto')
const game = require('../JSONSchema/game')
route.route('/').post(validateDto(game), gameController.createGame)
route.route('/:id').get(gameController.getUserId, gameController.getOneGame).post(gameController.createFvGame)



module.exports = route
