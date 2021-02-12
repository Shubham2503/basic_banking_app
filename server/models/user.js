const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: String,
    dob: Date,
    address: String,
    balence: {
        type: Number,
        required: true,
        default: "0"
    }
})

module.exports = mongoose.model('USER', UserSchema)