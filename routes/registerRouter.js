const Controller = require('../controllers/controllerRegister')
const router = require('express').Router()

router.get('/', Controller.register)
router.post('/', Controller.registerPost)

module.exports = router