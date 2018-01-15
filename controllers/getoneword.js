const word = require('../models/word')

exports.getoneword = (req, res) => {
  word.findOne({ 'wordinEnglish' : 'jose' }, 'definition', (err, docs) => {
    if (err) res.data(err)

    res.send(docs.definition)
  })
}