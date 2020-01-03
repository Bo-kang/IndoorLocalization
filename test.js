var plotly = require('plotly')('BoChan','pHxi14JnwbcDE1clMUuu');
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

// var trace1 = {
//   x: [1, 2, 3, 4],
//   y: [10, 15, 13, 17],
//   type: "scatter"
// };
// var trace2 = {
//   x: [1, 2, 3, 4],
//   y: [16, 5, 11, 9],
//   type: "scatter"
// };
// var data = [trace1, trace2];
// var graphOptions = {filename: "get-requests-example", fileopt: "overwrite"};
// plotly.plot(data, graphOptions, function (err, msg) {
//     console.log(msg);
// });
var date = new Date()
var toDay = date.toISOString()
var expDate = toDay.split('T')[0]
console.log(expDate)