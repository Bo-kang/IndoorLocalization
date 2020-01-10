var fs = require('fs')

// var initData = [{x:[], y:[], stream:{token:'itwu0r81ro', maxpoints:200}}];
// var initGraphOptions = {fileopt : "extend", filename : "nodenodenode"};

// plotly.plot(initData, initGraphOptions, function (err, msg) {
//   if (err) return console.log(err)
//   console.log(msg);

//   var stream1 = plotly.stream('itwu0r81ro', function (err, res) {
//     console.log(err, res);
//     clearInterval(loop); // once stream is closed, stop writing
//   });

//   var i = 0;
//   var loop = setInterval(function () {
//       var streamObject = JSON.stringify({ x : i, y : i });
//       stream1.write(streamObject+'\n');
//       i++;
//   }, 1000);
// });
module.exports = function (fileName, num) {
    var valueFromFile
    valueFromFile = fs.readFileSync(fileName + '.csv', 'utf-8')
    var dic = {}
    var lines = valueFromFile.split('\n')

    var sum = 0
    var count = lines.length

    for (var i in lines) {
        var items = lines[i].split(',')
        var key = Math.floor(Number(items[num]))
        if (!Number.isNaN(key)) {
            sum += key
            if (key in dic) {
                dic[key] += 1
            }
            else {
                dic[key] = 1
            }
        }
    }
    var maxValue = Math.max.apply(null, Object.values(dic))
    var maxIdx = Object.values(dic).indexOf(maxValue)
    var maxY = Object.keys(dic)[maxIdx]

    var avg = sum / count
    avg = Math.round(avg)
    var figure = { 'id': '' + fileName + num, 'data': [{ 'x': Object.keys(dic), 'y': Object.values(dic), 'type': 'bar', }], 'count': count, 'max': maxY, 'avg': avg }

    return figure
}