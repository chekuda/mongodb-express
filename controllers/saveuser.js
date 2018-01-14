
const User = require('../models/user')

exports.saveuser = (req, res) => {
  const test = User({
    name: 'test',
    surname: 'testsur'
  })

  test.save(err => {
    if (err) throw err

    res.send('Test Created')
  })
}