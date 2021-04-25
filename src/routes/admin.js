const express = require('express')
const router = express.Router()
const utils = require('../utils')
const path = require('path')
const fs = require('fs')

router.get('/', (req, res) => {
    res.render('admin')
})

router.post('/eventRegistration', async (req, res) => {
    try {
        await utils.generateCSV(req.body.event)

        let filePath = path.join(__dirname, `../../data/${req.body.event}.csv`)
        res.download(filePath)
    } catch (error) {
        res.sendFile(path.join(__dirname, '../../public/error404.html'))
    }
})

module.exports = router
