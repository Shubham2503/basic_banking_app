const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    dob: Date,
    address: String,
    balance: {
        type: Number,
        required: true,
        default: "0"
    }
})

module.exports = mongoose.model('USER', UserSchema)