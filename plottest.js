var plotly = require('')
var fs = require('fs')

var valueFromFile
valueFromFile = fs.readFileSync('2020-01-06_First_1.csv', 'utf-8')
var RA = []
var x = []
var temp = new Map()
var lines = valueFromFile.split('\n')