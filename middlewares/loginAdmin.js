const loginAdmin = (req, res, next) => {
    // req.session.loginStatus = true
    if (req.session.loginAdmin) {
        next()
    } else if (!req.session.loginStatus || !req.session.loginAdmin) {
        res.redirect('/login')
    }
}

module.exports = loginAdmin