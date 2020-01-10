/*
    Title : Server for Indoor Localization
    Author : BoChan Kang
    Email : ebfks0301@gmail.com

    Created Date : 2020.01.03
    Version :
        v0.0 최초 작성 시작(2020.01.03)   
        v1.0 서버 최초 완성(2020.01.08)
        v1.1 데이터 시각화 모듈 안정화(2020.01.09)
        v1.2 시각화 모듈 추가/수정, 서버 구동 방안 수정(2020.01.10)
*/ 
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes')
var toplot = require('./routes/toPlot')
var isStart = false
app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('./resources')) 
app.use(express.static('./views')) 

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.listen(3000,()=>{
    console.log('Connect')
    
})


routes.index(app)
routes.getData()
routes.sendData()
routes.start()
 
