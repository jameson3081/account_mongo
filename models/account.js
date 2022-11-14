const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Account = mongoose.model("account", accountSchema)
module.exports = Account
