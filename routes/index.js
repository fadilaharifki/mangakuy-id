const Controller = require('../controllers/controller')
const router = require('express').Router()
const comicRouter = require('./comicRouter')
const genreRouter = require('./genreRouter')
const loginRouter = require('../routes/loginRouter')
const logoutRouter = require('../routes/logoutRouter')
const registerRouter = require('../routes/registerRouter')

const loginUser = require('../middlewares/loginUser')
const loginAdmin = require('../middlewares/loginAdmin')

router.use('/login',loginRouter)             
router.use('/register',registerRouter)             
router.get('/', Controller.home)
// router.use(loginAdmin)

router.use('/comics',comicRouter)
router.use('/genres',genreRouter)

// router.use(loginUser)

router.use('/logout',logoutRouter)             



module.exports = router