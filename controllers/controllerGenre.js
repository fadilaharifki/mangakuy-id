const {Genre,Comic,ComicGenre} = require('../models')
const retingToStars = require('../helpers/ratingToStars')
const formatPrice = require('../helpers/formatPrice')

class Controller {
    static showGenre(req,res){
        let loginAdmin = req.session.loginAdmin
        Genre.findAll()
        .then(data=>{
            res.render('genre',{data, loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showPageAdd(req,res){
        let loginAdmin = req.session.loginAdmin
        Genre.findAll()
        .then(()=>{
            res.render('addGenre',{msg:undefined, loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static postAdd(req,res){
        let {genreName} = req.body
        let loginAdmin = req.session.loginAdmin
        Genre.create({
            genreName:genreName
        })
        .then(()=>{
            res.redirect('/genres')
        })
        .catch(err=>{
            if(err.name = "SequelizeValidationError"){
                let msg = []
                err.errors.forEach(e => {
                    msg.push(e.message)
                });
                res.render('addGenre',{msg, loginAdmin})
            }
        })
    }

    static deleteGenre(req,res){
        let id = req.params.id
        Genre.destroy({
            where:{
                id:id
            }
        })
        .then(()=>{
            res.redirect('/genres')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editGenre(req,res){
        let loginAdmin = req.session.loginAdmin
        let id = req.params.id
        Genre.findAll({
            where:{
                id:id
            }
        })
        .then(data=>{
            res.render('editGenre',{data,loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }


    static posteditGenre(req,res){
        let id = req.params.id
        let {genreName} = req.body
       
        Genre.update({
            genreName:genreName
        },{
            where:{
                id:id
            }
        })
        .then(()=>{
            res.redirect('/Genres')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showComicFromGenre(req,res){
        let id = req.params.id
        ComicGenre.findAll({
            include:[Comic],
            where:{
                GenreId:id
            }
        })
        .then(data=>{
            let loginAdmin = req.session.loginAdmin
            // res.send(data)
            res.render('showComicFromGenre',{data,loginAdmin,retingToStars,formatPrice})
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports = Controller