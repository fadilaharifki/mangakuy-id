const bcryp = require('bcryptjs')
const salt = bcryp.genSaltSync(5)

function passwordHash(password) {
    const hash = bcryp.hashSync(password, salt)
    return hash
}

function comparePassword(passwordInput, passwordDB) {
    const compare = bcryp.compareSync(passwordInput, passwordDB)
    return compare
}

module.exports = {
    passwordHash,
    comparePassword
}