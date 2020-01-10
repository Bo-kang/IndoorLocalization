var date = new Date()
var toDay = date.toISOString()
var expDate = toDay.split('T')[0]
var fs = require('fs')
var expNum = 1

var getPos = function (RA, RB, RC) {
  var distance = 44
  var X = Math.round((RA * RA - RB * RB + distance * distance) / (2 * distance) * 100) / 100
  var Y = Math.round((RA * RA - RC * RC + distance * distance) / (2 * distance) * 100) / 100
  var result = X + ',' + Y
  return result
}

module.exports.saveData = function (data) {

  var fileName

  if (data.ID == 'First')
    fileName = '1.csv'
  else if (data.ID == 'Second')
    fileName = '2.csv'
  else if (data.ID == 'Third')
    fileName = '3.csv'
  else if (data.ID == 'Fourth')
    fileName = '4.csv'


  fs.open(fileName, 'a', (err, fd) => {
    if (err) throw err;
    var RA = Math.floor(Number(data.RA) * 100)
    var RB = Math.floor(Number(data.RB) * 100)
    var RC = Math.floor(Number(data.RC) * 100)
    fs.appendFile(fd, data.ID + ',' + RA + ',' + RB + ',' + RC + ',' + getPos(RA, RB, RC) + '\n', 'utf8', (err) => {


      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });
}