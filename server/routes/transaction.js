const express = require('express')
const userModel = require('../models/user')
const transactionModel = require('../models/transaction')
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

                        const fromUser = await userModel.findById(uid)

                        const transaction = new transactionModel({
                            email1: fromUser.email,
                            email2: req.body.email,
                            amount: req.body.amount
                        })
                        console.log(transaction)
                        const addTransaction = await transaction.save()

                        res.status(200).json({message: "updated"})
                    } else 
                    res.status(400).json(err)
                }
            }
        ).catch((err) => res.status(400).json(err))
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const transaction = await transactionModel.find()
        res.status(200).json({
            count: transaction.length,
            data: transaction
        })
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router