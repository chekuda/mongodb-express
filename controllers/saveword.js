
const Word = require('../models/word')

exports.saveword = (req, res) => {
  const newWord = Word({
      wordinEnglish: 'jose',
      definition: {
        noum: [
          'nombre'
        ],
        verb: [],
        adjetive: [],
        adverb: []
      }
  })

  newWord.save(err => {
    if (err) throw err

    res.send('Word Created')
  })
}