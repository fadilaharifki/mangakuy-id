class Controller {
    static logout(req, res) {
        req.session.loginStatus = false
        let login = req.session.loginStatus
        req.session.loginAdmin = false
        let loginAdmin = req.session.loginAdmin
        res.render('login', {login,loginAdmin})
    }
}

module.exports = Controller