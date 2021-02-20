const express = require('express')
const userModel = require('../models/user')
const router = express.Router()


router.post('/', async (req, res) => {
    const uid = req.body.id

    try {
        const updateAmountByEmail = await userModel.findOneAndUpdate({ email: req.body.email },{
            $inc: { balance: req.body.amount }}, {new: true}, async (err,doc) => {
                if(err)
                res.status(400).json(err)
                else {
                    console.log("DOC" + doc)
                    if(doc) {
                        const updateAmountByID = await userModel.updateOne({ _id: uid },{
                                $inc: { balance: -req.body.amount }
                            })
                        res.status(200).json({message: "updated"})
                    }else 
                    res.status(400).json(err)
                }
            }
        ).catch((err) => res.status(400).json(err))
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router