const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
require('dotenv').config();
const DB = process.env.DATABASE
const mongoose = require('mongoose');

mongoose.connect(
    DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);
// connect Database

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})