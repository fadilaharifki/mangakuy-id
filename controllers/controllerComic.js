const {Comic,Genre,ComicGenre} = require('../models')
const retingToStars = require('../helpers/ratingToStars')
const formatPrice = require('../helpers/formatPrice')

class Controller {
    static showComic(req,res){
        let loginAdmin = req.session.loginAdmin
        Comic.findAll()
        .then(data=>{
            res.render('comic',{data,retingToStars,formatPrice,loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showPageAdd(req,res){
        let loginAdmin = req.session.loginAdmin
        Comic.findAll()
        .then(data=>{
            res.render('addComic',{msg:undefined, loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static postAdd(req,res){
        let {title,author,publicationYear,postBy,price,picture,rating} = req.body
        Comic.create({
            title:title,
            author:author,
            publicationYear:publicationYear,
            postBy:postBy,
            price:price,
            picture:picture,
            rating:rating
        })
        .then(()=>{
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
        let id = req.params.id
        let loginAdmin = req.session.loginAdmin
        Comic.findAll({
            where:{
                id:id
            }
        })
        .then(data=>{
            res.render('editComic',{data, loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }


    static posteditComic(req,res){
        let id = req.params.id
        let {title,author,publicationYear,postBy,price,picture,rating} = req.body
       
        Comic.update({
            title:title,
            author:author,
            publicationYear:publicationYear,
            postBy:postBy,
            price:price,
            picture:picture,
            rating:rating
        },{
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

    static addGenre(req,res){
        let loginAdmin = req.session.loginAdmin
        let id= req.params.id
        let dataComic;
        Comic.findAll({
            where:{
                id:id
            }
        })
        .then((data)=>{
            dataComic = data
        })

        .then(()=>{
            return Genre.findAll()
        })

        .then((dataGenre)=>{
            res.render('addGenretoComic',{dataGenre,dataComic,loginAdmin})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static postAddGenre(req,res){
        let ComicId = req.params.id
        let {GenreId} = req.body
        ComicGenre.create({ComicId,GenreId})
        .then(()=>{
            res.redirect('/comics')
        })
        .catch(err=>{
           res.send(err)
        })
    }
}

module.exports = Controller