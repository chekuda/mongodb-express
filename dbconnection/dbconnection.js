const mongoose = require('mongoose')

const db_URL = 'mongodb://127.0.0.1:27017/vocabulary_test'

exports.createMongooseConection = () => {
  mongoose.connect(db_URL, { useMongoClient: true })

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + db_URL)
  })

  mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err)
  })

  mongoose.connection.on('disconnected', err => {
    console.log('Mongoose default connection disconnected')
  })

  process.on('SIGINT', err => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}

