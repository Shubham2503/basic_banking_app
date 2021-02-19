const express = require('express')
const userModel = require('../models/user')
const router = express.Router()


router.post('/', async (req, res) => {
    const uid = req.body.id

    try {
        const updateAmountByID = await userModel.updateOne({ _id: uid },{
                $inc: { balance: -req.body.amount }
            })
        const updateAmountByEmail = await userModel.updateOne({ email: req.body.email },{
            $inc: { balance: req.body.amount }
        })
        
        res.status(200).json({message: "updated"})
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router