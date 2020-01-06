var bodyParser = require('body-parser')
var logics = require('./logics')

module.exports.index = function(app){
    app.get('/',(req,res) =>{
        res.render('plottest.ejs')
    })
    app.get('/test',(req,res) =>{
        res.render('index.ejs', {txt : 'tempFile'})
    })
}

module.exports.getData = function(app){
    app.post('/getData', (req,res) =>{
        var fileName = logics.saveData(req.body)
        console.log(req.body)
        res.send(fileName)
    })
}