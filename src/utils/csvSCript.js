const { User } = require('../models')
const ObjectsToCsv = require('objects-to-csv')
const path = require('path')
const generateCSV = async (queryEvent) => {
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
                eventRegistration[event.eventName].push(event)
            })
        })
        let filePath = path.join(__dirname, `../../data/${queryEvent}.csv`)
        await new ObjectsToCsv(eventRegistration[queryEvent]).toDisk(filePath)
        console.log({ count })
    } catch (error) {
        console.trace(error)
    }
}

module.exports = generateCSV
