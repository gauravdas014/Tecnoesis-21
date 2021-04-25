const express = require('express')
const router = express.Router()
const path = require('path')

const userRoutes = require('./user')
const hacksRoutes = require('./hacks')
const modulesRoutes = require('./modules')
const eventRegisterRoute = require('./eventRegister')
const tecnoContactFormRoute = require('./tecnoContactForm')
const scheduleRoute = require('./schedule')
const teamRoute = require('./team')
const adminRoutes = require('./admin')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/landing.html'))
    // res.render('landing')
})

router.use('/', tecnoContactFormRoute)
router.use('/user', userRoutes)
router.use('/hacks', hacksRoutes)
router.use('/modules', modulesRoutes)
router.use('/eventRegister', eventRegisterRoute)
router.use('/schedule', scheduleRoute)
router.use('/team', teamRoute)
router.use('/admin', adminRoutes)

module.exports = router
