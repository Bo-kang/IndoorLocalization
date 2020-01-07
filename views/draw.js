var fs = require('fs')

module.exports.getFigure = function(id, tagNum){

    var fileName = '/home/turtlebot/BoChan/' + 1 + '.csv'


    // var reader = new FileReader();
    // console.log(reader.readAsText(fileName, 'utf-8'))


    var valueFromFile
    valueFromFile = fs.readFileSync(fileName, 'utf-8')
    console.log(valueFromFile)
    var dic = {}
    var lines = valueFromFile.split('\n')

    for (var i in lines) {
        var items = lines[i].split(',')
        var key = Math.floor(Number(items[tagNum]) * 100)
        if (key in dic) {
            dic[key] += 1
        }
        else {
            dic[key] = 1
        }
    }
    
    var figure = { 'data': [{ 'x': Object.keys(dic), 'y': Object.values(dic), 'type': 'bar' }] }
    return figure
}
