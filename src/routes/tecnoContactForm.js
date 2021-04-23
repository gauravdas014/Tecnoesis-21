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

        req.flash('success_msg', 'Message Sent');

        return res.redirect('/')
    } catch (error) {
        console.log({ error })

        req.flash('error_msg', 'Some Error Occured ! Please Send Again!')

        return res.redirect('/')
    }
})

module.exports = router
