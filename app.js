/*
    Title : Server for Indoor Localization
    Author : BoChan Kang
    Email : ebfks0301@gmail.com

    Created Date : 2020.01.03
    Version :
        v1.0.0 (2020.01.03)   

*/ 
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes')
var toplot = require('./routes/toPlot')

app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('./resources')) 
app.use(express.static('./views')) 

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)



function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }
 

app.listen(3000,()=>{
    console.log('Connect')
    
})


routes.index(app)
routes.getData(app)
routes.sendData()

 
