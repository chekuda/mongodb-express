require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const dbconnection = require('./dbconnection/dbconnection')

const app = express()

dbconnection.createMongooseConection()

const port = process.env.PORT || 5001

app.use('/api', routes.listRoutes)

app.get('/', (req, res) => res.send('CONNECTED'))

app.listen(port)

console.log(`Listening on port ${port}`)