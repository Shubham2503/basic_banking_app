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

router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        if(!user) {
            res.status(404).json({err: "No User"})
        }
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const user = new userModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        dob: req.body.dob,
        address: req.body.address,
        balance: req.body.balance
    })
    try {
        const addUser = await user.save()
        res.status(200).json(addUser)
    } catch (err) {
        res.status(400).json(err)
    }
})




router.delete('/', async(req, res) => {
    try {
        const user = userModel.findById(req.body.id)
        if(!user) {
            res.status(404).json({error: "No user found"})
        }

        await user.remove()
        res.status(200).json({msg : "Successfully deleted"})

    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router