const User = require('./../model/User')
const route = require('express').Router()
const userController = require('./../controller/userController')
const fvController = require('./../controller/fvController')
const validateDto = require('../JSONSchema/validate-dto')
const user = require('../JSONSchema/user')

// route.use('/:userId/game', gameRoute)

route.route('/').post(validateDto(user), userController.createUser)
route.route('/:id').get(userController.getOneUser).delete(fvController.deleteListGame)





module.exports = route
