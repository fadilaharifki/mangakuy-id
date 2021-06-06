const Controller = require('../controllers/controllerComic')

const router = require('express').Router()

router.get('/',Controller.showComic)

router.get('/add',Controller.showPageAdd)
router.post('/add',Controller.postAdd)

router.get('/delete/:id',Controller.deleteComic)

router.get('/edit/:id',Controller.editComic)
router.post('/edit/:id',Controller.posteditComic)

module.exports=router