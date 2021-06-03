const { Customer } = require("../models/index")

class Controller {
    static home(req, res) {
        let loginAdmin = req.session.loginAdmin
        let login = req.session.loginStatus
        res.render('index', {login, loginAdmin})
    }
}

module.exports = Controller