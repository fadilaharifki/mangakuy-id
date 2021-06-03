const Controller = require('../controllers/controllerLogin')
const router = require('express').Router()

router.get('/', Controller.login)
router.post('/', Controller.loginPost)

module.exports = router