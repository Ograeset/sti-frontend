

function age(){
  var xhr = new XMLHttpRequest()
  xhr.open ("GET", "http://localhost:3001/football")
  xhr.onload = function (){
      var data = JSON.parse(this.response)
      createTable(data)
  }
  xhr.send()
}




function createTable(data){
  
  var appElement = document.getElementById("app")
  var aTable = document.createElement("table")
  appElement.appendChild(aTable)
  aTable.appendChild(createRow(data[0].name, data[0].M, data[0].V, data[0].O, data[0].F, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].M, data[1].V, data[1].O, data[1].F, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].M, data[2].V, data[2].O, data[2].F, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].M, data[3].V, data[3].O, data[3].F, data[3].points))

}

function createRow(name, M, V, O, F, points){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(M))
  aRow.appendChild(createCell(V))
  aRow.appendChild(createCell(O))
  aRow.appendChild(createCell(F))
  aRow.appendChild(createCell(points))
  return aRow
}

function createCell(content){ 
var aCell = document.createElement("td")
aCell.innerHTML = content
return aCell;
}

age();