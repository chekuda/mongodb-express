const express = require('express')

const app = express()

const port = process.env.PORT || 5001

app.get('/', (req, res) => res.send('CONNECTED'))

app.listen(port)

console.log(`Listening on port ${5001}`)