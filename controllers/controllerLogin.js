const { Customer, Admin } = require("../models/index")

class Controller {
    static login(req, res) {
        let login = req.session.loginStatus
        let loginAdmin = req.session.loginAdmin
        res.render('login',{login, loginAdmin})
    }
    static loginPost(req, res) {
        const {username, password} = req.body
        Admin.findAll({
            where: {username, password}
        })
        .then((data) => {
            if (data.length) {
                req.session.loginAdmin = true
                res.redirect('/comics')
            } else {
                res.redirect('/login')
            }
        })
        .catch((err) => res.send(err))
    }
}

module.exports = Controller