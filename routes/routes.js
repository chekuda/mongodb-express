const express = require('express')
const saveUserController = require('../controllers/saveuser')
const saveWordController = require('../controllers/saveword')

const listRoutes = express.Router()

listRoutes.get('/saveuser', saveUserController.saveuser)

listRoutes.get('/saveword', saveWordController.saveword)

exports.listRoutes = listRoutes