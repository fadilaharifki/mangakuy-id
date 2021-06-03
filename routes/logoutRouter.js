const Controller = require('../controllers/controllerLogout')
const router = require('express').Router()

router.get('/', Controller.logout)

module.exports = router