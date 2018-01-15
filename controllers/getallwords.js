const word = require('../models/word')

exports.getallwords = (req, res) => {
  word.find((err, docs) => {
    if (err) res.data(err)

    res.send(docs)
  })
}