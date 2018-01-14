const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const db_URL = 'mongodb://127.0.0.1:27017/vocabulary_test'

mongoose.connect(db_URL, { useMongoClient: true })

const app = express()

const port = process.env.PORT || 5001

app.use('/api', routes.listRoutes)

app.get('/', (req, res) => res.send('CONNECTED'))

app.listen(port)

console.log(`Listening on port ${port}`)