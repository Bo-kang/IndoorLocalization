var date = new Date()
var toDay = date.toISOString()
var expDate = toDay.split('T')[0]
var fs = require('fs')
var expNum = 1
var toPlot = require('./toPlot')

module.exports.saveData = function (data) {
  var fileName = expDate + '_' + data.ID + '_' + expNum + '.csv'

  fs.open(fileName, 'a', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd,data.ID + ',' + data.RA + ',' + data.RB + ',' + data.RC+'\n', 'utf8', (err) => {
      console.log(data.ID + ',' + data.RA + ',' + data.RB + ',' + data.RC+'\n')
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });
  return toPlot(fileName, 1)

  
}