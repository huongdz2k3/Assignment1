const route = require('express').Router()
const fvController = require('./../controller/fvController')

route.route('/:userId/game/:gameId').post(fvController.createFvList).delete(fvController.deleteOneGame)
module.exports = route