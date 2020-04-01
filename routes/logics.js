var fs = require('fs')

var dropStart = false // 값 버리기 시작 확인 플래그 

var dropStarta = [false, false, false, false]

var avgArr =  [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

var getPos = function (RA, RB, RC) { // X,Y의 값을 만드는 함수
  var distance = 44
  var X = Math.round((RA * RA - RB * RB + distance * distance) / (2 * distance) * 100) / 100
  var Y = Math.round((RA * RA - RC * RC + distance * distance) / (2 * distance) * 100) / 100
  var result = X + ',' + Y
  return result
}

module.exports.toPlot = function (fileName, num) { // 그래프를 그릴때 필요한 데이터를 가공하여 보내는 함수
  var valueFromFile
  valueFromFile = fs.readFileSync(fileName + '.csv', 'utf-8')
  var dic = {}
  var lines = valueFromFile.split('\n')

  var sum = 0
  var count = lines.length // 입력받은 센서값의 갯수 (웹에 표시되는 것은 R1의 갯수)

  if (count >= 50) dropStarta[Number(fileName)] = true;
  
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
  var maxY = Object.keys(dic)[maxIdx] // 최빈 값
  var avg = sum / count // 평균 값
  var variance = 0 // 분산 값
  avg = Math.round(avg)

  for(var i in dic){
    var temp = i - avg
    temp = temp * temp * dic[i];
    variance += temp;
  }

  variance = variance / count;
  variance = round(variance,2);
  stDev = Math.sqrt(variance);
  stDev = rount(stDev,2)
   if(Number(num) < 4)
   avgArr[Number(fileName)][Number(num)] = avg

  var figure = { 'id': '' + fileName + num, 'data': [{ 'x': Object.keys(dic), 'y': Object.values(dic), 'type': 'bar', }], 'count': count, 'max': maxY, 'avg': avg , 'var' : variance, 'stDev' : stDev}
  return figure
}

module.exports.saveData = function (data) {
  var dropCheck = false
  var fileName

  if (data.ID == 'First')
    fileName = '1.csv'
  else if (data.ID == 'Second')
    fileName = '2.csv'
  else if (data.ID == 'Third')
    fileName = '3.csv'
  else if (data.ID == 'Fourth')
    fileName = '4.csv'

  var RA = Math.round(Number(data.RA) * 100)
  var RB = Math.round(Number(data.RB) * 100)
  var RC = Math.round(Number(data.RC) * 100)
  var dId
  if (dropStarta[Number(fileName[0])]) {
    if (!(avgArr[Number(fileName[0])][1] + 10 >= RA && avgArr[Number(fileName[0])][1] - 10 <= RA)) {
      dId = 'RA'
      dropCheck = true
    }
    else if (!(avgArr[Number(fileName[0])][2] + 10 >= RB && avgArr[Number(fileName[0])][2] - 10 <= RB)){ 
      dId = 'RB'
      dropCheck = true
    }
    else if (!(avgArr[Number(fileName[0])][3] + 10 >= RC && avgArr[Number(fileName[0])][3] - 10 <= RC)){ 
      dId = 'RC'
      dropCheck = true
    }
  }


  if (dropStarta[Number(fileName[0])] && dropCheck) {
    console.log('-----------------------------------------------------------------------------')
    console.log(avgArr[Number(fileName[0])][1]+ ',' +  avgArr[Number(fileName[0])][2]+ ',' +  avgArr[Number(fileName[0])][3])
    console.log('dropValue '+ data.ID + dId+' : ' + RA + ',' + RB + ',' + RC)
    console.log('-----------------------------------------------------------------------------')
  }
  else {
    console.log('receiveValue'+ data.ID + ' : ' + RA + ',' + RB + ',' + RC)
    fs.open(fileName, 'a', (err, fd) => {
      if (err) throw err;
      fs.appendFile(fd, data.ID + ',' + RA + ',' + RB + ',' + RC + ',' + getPos(RA, RB, RC) + '\n', 'utf8', (err) => {
        fs.close(fd, (err) => {
          if (err) throw err;
        });
        if (err) throw err;
      }
      );
    });
  }
  
}