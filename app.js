const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const gameRoute = require('./src/router/gameRoute')
const userRoute = require('./src/router/userRoute')
const fvRoute = require('./src/router/fvRoute')

// initialize router

app.use(helmet()) // security
app.use(morgan('dev'))

// Body parser , reading data from body into req.body
app.use(express.json())

// Router hander
app.use('/api/game', gameRoute)
app.use('/api/user', userRoute)
app.use('/api/user', fvRoute)

module.exports = app