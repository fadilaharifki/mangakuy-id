const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: 'test87263871263@outlook.com',
        pass: 'wwqqweqwxw31~2!'
    }
})

module.exports = transporter
