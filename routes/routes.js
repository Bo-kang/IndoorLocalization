var bodyParser = require('body-parser')
var logics = require('./logics')

module.exports.index = function(app){
    app.get('/',(req,res) =>{
        res.render('index.ejs')
    })
    app.get('/test',(req,res) =>{
        res.render('index.ejs', {txt : 'tempFile'})
    })
}

module.exports.getData = function(app, fs){
    app.post('/getData', (req,res) =>{
        console.log("Post")
        console.log(req.body)

        res.render('index.ejs')
    })
}