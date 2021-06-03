const { Customer, Admin } = require("../models/index")
const transporter = require("../nodemailer/registerMail")

class Controller {
    static register(req, res) {
        let loginAdmin = req.session.loginAdmin
        let login = req.session.loginStatus
        res.render('register', {login, loginAdmin})
    }
    static registerPost(req, res) {
        const {name, username, password, email, userType} = req.body
        Admin.create({name, username, password, email})
        .then(() => {
            const options = {
                from: 'test87263871263@outlook.com',
                to: email,
                subject: 'Register',
                text: `Selamat ${username} telah register di mangakuy`
            }
            transporter.sendMail(options, (err, info) => {
                if (err) {
                    return console.log(err);
                }
                console.log(`send: ${info.response}`);
            })

            res.redirect('/login')
        })
        .catch(err => res.send(err))

    }

}

module.exports = Controller