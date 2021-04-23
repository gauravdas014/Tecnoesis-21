const express = require('express')
const router = express.Router()
const { User } = require('../models')
const { userAuth } = require('../middlewares')

const EVENTS = {
    'Pitch Please': {
        teamBased: true,
    },
    'Ad-ovation': {
        teamBased: true,
    },
    'Nibble Code': {
        teamBased: false,
    },
    'Pixelate 2021': {
        teamBased: false,
    },
    'Data Strata': {
        teamBased: true,
    },
    Cyberbot: {
        teamBased: true,
    },
    'Plot Twist': {
        teamBased: false,
    },
    'Mascot Making': {
        teamBased: true,
    },
    'Draft Ritz 4.0': {
        teamBased: false,
    },
    'Pitch the car': {
        teamBased: true,
    },
    'Call of Duty Mobile': {
        teamBased: true,
    },
    'Mini-Militia': {
        teamBased: true,
    },
    'My City My Dream': {
        teamBased: true,
    },
    'Robo Mania': {
        teamBased: true,
    },
    'Inter College Coding Competition': {
        teamBased: true,
    },
}

router.get('/', userAuth, (req, res) => {
    res.render('registration', { userName: req.user.name })
})

router.post('/', userAuth, async (req, res) => {
    try {
        let user = req.user
        // console.log(req.body)
        let event = new Object({
            eventName: req.body.eventName,
            isTeamBased: EVENTS[req.body.eventName].teamBased,
            moduleName: req.body.moduleName,
        })
        // console.log({ event })
        if (event.isTeamBased) {
            event.teamName = req.body.team_name
            event.teamLeaderName = req.body.team_leader_name
            event.teamLeaderEmail = req.body.team_leader_email
            event.teamLeaderPhone = req.body.team_leader_phone_No
            event.teamLeaderAddress = req.body.team_leader_address
            event.teamMembers = new Array()
            let bodyKeys = Object.keys(req.body)
            event.teamMembers.push(event.teamLeaderName)
            bodyKeys.forEach((key) => {
                if (
                    key.includes('team_member_name') &&
                    req.body[key].length > 0
                ) {
                    event.teamMembers.push(req.body[key])
                }
            })
        } else {
            event.participantName = req.body.name
            event.participantEmail = req.body.email
            event.participantPhone = req.body.phone_No
            event.participantAddress = req.body.address
        }
        user.registeredEvents.push(event)
        await user.save()

        req.flash('success_msg', 'Sucessfully Registered to the event')

        res.redirect('/eventRegister')
    } catch (error) {
        console.trace(error)

        req.flash('error_msg', 'Some Error Occured ! Register Again!')

        res.redirect('/eventRegister')
    }
})

module.exports = router
