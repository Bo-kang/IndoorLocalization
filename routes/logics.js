var date = new Date()
var toDay = date.toISOString()
var expDate = toDay.split('T')[0]

module.exports.saveData = function(data, fs) {

    fs.openSync('/resources/'+ expDate + '.csv', 'a', (err, fd) => {
        if (err) throw err;
        fs.appendFile(fd, '\n'+1, 'utf8', (err) => {
          fs.close(fd, (err) => {
            if (err) throw err;
          });
          if (err) throw err;
        });
      });
}


module.exports.errorBar = function(fileName,fs){ 

}


module.exports.observedValue = function(fileName,fs){

}