const User = require('./../model/User')
const route = require('express').Router()
const userController = require('./../controller/userController')
route.route('/').post(userController.createUser)


module.exports = route
