module.exports = {
    ...require('./email'),
    ...require('./user'),
    generateCSV : require('./csvSCript')
}
