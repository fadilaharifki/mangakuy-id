const loginUser = (req, res, next) => {
    if (req.session.loginStatus) {
        next()
    } else{
        res.redirect('/login')
    }
}

module.exports = loginUser