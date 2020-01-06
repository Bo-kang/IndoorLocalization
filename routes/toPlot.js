var plotly = require('plotly')('BoChan', 'pHxi14JnwbcDE1clMUuu');
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
    valueFromFile = fs.readFileSync(fileName, 'utf-8')
    var dic = {}
    var lines = valueFromFile.split('\n')

    for (var i in lines) {
        var items = lines[i].split(',')
        var key = Math.floor(Number(items[num]) * 100)
        if (key in dic) {
            dic[key] += 1
        }
        else {
            dic[key] = 1
        }
    }
    
    var figure = { 'data': [{ 'x': Object.keys(dic), 'y': Object.values(dic), 'type': 'bar' }] }

    var imgOpts = {
        format: 'png',
        width: 500,
        height: 500
    }

    plotly.getImage(figure, imgOpts, function (err, imageStream) {
        if (err) return console.log(err)
        var fileStream = fs.createWriteStream('/home/turtlebot/BoChan/resources/'+fileName + num + '.png')
        imageStream.pipe(fileStream)
    });
    return '/home/turtlebot/BoChan/resources/'+fileName + num + '.png'
}