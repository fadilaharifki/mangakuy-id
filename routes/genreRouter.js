const Controller = require('../controllers/controllerGenre')

const router = require('express').Router()

router.get('/',Controller.showGenre)

router.get('/add',Controller.showPageAdd)
router.post('/add',Controller.postAdd)

router.get('/delete/:id',Controller.deleteGenre)

router.get('/edit/:id',Controller.editGenre)
router.post('/edit/:id',Controller.posteditGenre)

router.get('/showComics/:id',Controller.showComicFromGenre)

module.exports=router