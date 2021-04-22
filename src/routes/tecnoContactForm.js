const express = require('express')
const router = express.Router()
const { TecnoContactForm } = require('../models')

router.post('/contactForm', async (req, res) => {
    try {
        let { email, message } = req.body

        let newMessage = new TecnoContactForm({
            email,
            message,
        })
        await newMessage.save()
        return res.redirect('/')
    } catch (error) {
        console.log({ error })
        return res.redirect('/')
    }
})

module.exports = router
