const ObjectsToCsv = require('objects-to-csv')
const { User } = require('./models')
const mongoose = require('mongoose')
// require('dotenv').config()
mongoose
    .connect(
        'URL',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    )
    .then(() => {
        console.log('Database connected')
        generateCSV()
    })

    .catch((err) => console.error(err))

const generateCSV = async () => {
    try {
        let users = await User.find()
        // console.log(users)
        let eventRegistration = new Object()
        let count = 0
        users.forEach((user) => {
            user.registeredEvents.forEach((event) => {
                count++
                if (!eventRegistration.hasOwnProperty(event.eventName)) {
                    eventRegistration[event.eventName] = new Array()
                }
                if (event.isTeamBased) {
                    eventRegistration[event.eventName].push({
                        Email: event.teamLeaderEmail,
                        Phone: event.teamLeaderPhone,
                    })
                } else {
                    eventRegistration[event.eventName].push({
                        Email: event.participantEmail,
                        Phone: event.participantPhone,
                    })
                }
            })
        })

        let events = Object.keys(eventRegistration)
        for (let event of events) {
            console.log(event + ' : ', eventRegistration[event])
            new ObjectsToCsv(eventRegistration[event]).toDisk(`${event}.csv`)
        }
        console.log({ count })
    } catch (error) {
        console.trace(error)
    }
}
// generateCSV()
