const express = require('express')
const saveUserController = require('../controllers/saveuser')
const saveWordController = require('../controllers/saveword')
const getAllWordsController = require('../controllers/getallwords')
const getOneWordController = require('../controllers/getoneword')

const listRoutes = express.Router()

listRoutes.get('/saveuser', saveUserController.saveuser)

listRoutes.get('/saveword', saveWordController.saveword)

listRoutes.get('/getallwords', getAllWordsController.getallwords)

listRoutes.get('/getoneword', getOneWordController.getoneword)

exports.listRoutes = listRoutes