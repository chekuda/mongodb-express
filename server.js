const express = require('express')
const MongoClient = require('mongodb').MongoClient

const db_URL = 'mongodb://127.0.0.1:27017'

const app = express()

const port = process.env.PORT || 5001

app.get('/', (req, res) => res.send('CONNECTED'))

app.get('/getdata', (req,res) => {
  MongoClient.connect(db_URL, (err, db) => {
    if (err) throw err

    const dbo = db.db("vocabulary_test")

    dbo.collection("vocabulary").find().toArray((err, result) => {
      if (err) throw err

      console.log(result)
      db.close()
    })
  })
})

app.listen(port)

console.log(`Listening on port ${5001}`)