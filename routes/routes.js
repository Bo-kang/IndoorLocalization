var bodyParser = require('body-parser')
var logics = require('./logics')
var toplot = require('./toPlot')

var isStart = false

var connection = {
    'First': false,
    'Second': false,
    'Third': false,
    'Fourth': false
}

var connectCheck = function (id, connection) {
    if (!connection[id]) {
        connection[id] = true
        console.log(id + ' Connected')
    }
}


module.exports.index = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    })

}

module.exports.getData = function () {
    app.post('/getData', (req, res) => {
        if (isStart) {
            var fileName = logics.saveData(req.body)
            console.log(req.body)
            res.send(fileName)
        }
        else {
            connectCheck(req.body.ID, connection)
            res.send(req.body.ID + ' ready')
        }
    })
}

module.exports.sendData = function () {
    app.post('/toPlot', (req, res) => {
        if (isStart) {
            var id = req.body.ID
            var num = req.body.NUM
            res.json(toplot(id, num))
        }
        else{
            res.json({a:'not Started'})
        }
    })
}

module.exports.start = function () {
    app.get('/start', (req, res) => {
        isStart = true
        console.log('START')
        res.render('index2')
    })
}