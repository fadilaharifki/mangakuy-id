const {Comic,Genre,ComicGenre} = require('../models')
const retingToStars = require('../helpers/ratingToStars')
const formatPrice = require('../helpers/formatPrice')

class Controller {
    static showComic(req,res){
        let loginAdmin = req.session.loginAdmin
        Comic.findAll({
            include: [Genre],
            order: [['id', 'ASC']]
        })
        .then(data=>{
            res.render('comic',{data,retingToStars,formatPrice,loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showPageAdd(req,res){
        let loginAdmin = req.session.loginAdmin
        Genre.findAll()
        .then(data=>{
            res.render('addComic',{msg:undefined, loginAdmin, data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static postAdd(req,res){
        let {title,author,publicationYear,price,picture,rating,GenreId} = req.body
        let ComicId;
        if (!Array.isArray(GenreId)) GenreId = [GenreId]
        console.log({GenreId}, '<<<<<<<<<<<<<<<<<<<<<');
        Comic.create({title,author,publicationYear,price,picture,rating})
        .then(() => {
            return Comic.findAll({
                limit: 1,
                order: [ [ 'createdAt', 'DESC' ]]
            })
        })
        .then(data => {
            ComicId = data[0].id
            GenreId.forEach(e => {
                ComicGenre.create({GenreId:+e, ComicId})
            })
            res.redirect('/comics')
        })
        .catch(err=>{
            let loginAdmin = req.session.loginAdmin
            if(err.name = "SequelizeValidationError"){
                let msg = []
                err.errors.forEach(e => {
                    msg.push(e.message)
                });
                res.render('addComic',{msg, loginAdmin})
            }
        })
    }

    static deleteComic(req,res){
        let id = req.params.id
        Comic.destroy({
            where:{
                id:id
            }
        })
        .then(()=>{
            res.redirect('/comics')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editComic(req,res){
        let id = +req.params.id
        let loginAdmin = req.session.loginAdmin
        let dataComic;
        Comic.findByPk(id, {
            include: Genre
        })
        .then(data=>{
            dataComic = data
            return Genre.findAll()
        })
        .then(dataGenre => {
            res.render('editComic',{dataComic, loginAdmin, dataGenre})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static posteditComic(req,res){
        let id = req.params.id
        let {title,author,publicationYear,postBy,price,picture,rating, GenreId} = req.body
        if (!Array.isArray(GenreId)) GenreId = [GenreId]
        Comic.update({title,author,publicationYear,postBy,price,picture,rating},{
            where:{
                id:id
            },
        })
        .then(()=>{
            return Comic.findByPk(id, {
                include: Genre
        })
        .then(dataComic => {
            dataComic.Genres.forEach(e => {
                ComicGenre.destroy({
                    where: {
                        GenreId: e.id,
                        ComicId: dataComic.id
                    }
                })
            })
            GenreId.forEach(e => {
                ComicGenre.create({GenreId:+e, ComicId:dataComic.id})
            })
            res.redirect('/comics')
        })
        .catch(err=>{
            res.send(err)
        })

        })
    }

}

module.exports = Controller

