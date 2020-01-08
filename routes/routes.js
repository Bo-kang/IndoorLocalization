var bodyParser = require('body-parser')
var logics = require('./logics')
var toplot = require('./toPlot')
module.exports.index = function(app){
    app.get('/',(req,res) =>{
        res.render('index')
    })

}

module.exports.getData = function(app){
    app.post('/getData', (req,res) =>{
        var fileName = logics.saveData(req.body)
        console.log(req.body)
        res.send(fileName)
    })
}

module.exports.sendData = function(){
    app.post('/toPlot', (req,res) =>{
        console.log(req.body)
        var id = req.body.ID
        var num = req.body.NUM
        res.json(toplot(id,num))
        console.log(toplot(id,num))
    })
}