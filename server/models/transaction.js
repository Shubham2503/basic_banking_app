const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    email1: {
        type: String,
        required: true,
        lowercase: true
    },
    email2: {
        type: String,
        required: true,
        lowercase: true
    },
    amount: {
        type: Number,
        required: true,
        default: "0"
    }
})

module.exports = mongoose.model('TRANSACTION', TransactionSchema)