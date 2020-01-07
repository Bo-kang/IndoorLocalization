var date = new Date()
var toDay = date.toISOString()
var expDate = toDay.split('T')[0]
var fs = require('fs')
var expNum = 1


module.exports.saveData = function (data) {

  var fileName


  if (data.ID == 'First')
    fileName = '1.csv'
  else if (data.ID == 'Second')
    fileName = '2.csv'
  else if (data.ID == 'Third')
    fileName = '3.csv'
  else if(data.ID == 'Forth')
    fileName = '4.csv'


  fs.open(fileName, 'a', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, data.ID + ',' + data.RA + ',' + data.RB + ',' + data.RC + '\n', 'utf8', (err) => {
      console.log(data.ID + ',' + data.RA + ',' + data.RB + ',' + data.RC + '\n')
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });


}