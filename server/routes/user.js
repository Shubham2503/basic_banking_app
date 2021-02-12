const express = require('express')
const userModel = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const user = await userModel.find()
        res.status(200).json({
            count: user.length,
            data: user
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const user = new userModel({
        uname: req.body.uname,
        fname: req.body.fname,
        lname: req.body.lname,
        dob: req.body.dob,
        address: req.body.address
    })
    try {
        const addUser = await user.save()
        res.status(200).json(addUser)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router