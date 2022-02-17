

function age(){
  var xhr = new XMLHttpRequest()
  //xhr.open ("GET", "/js/data.json")
  //xhr.open ("GET", "http://localhost:3001/football")
  xhr.open ("GET", "https://nasir-backend.herokuapp.com/football")
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
  aTable.appendChild(createRow(data[0].name, data[0].m, data[0].v, data[0].o, data[0].f, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].m, data[1].v, data[1].o, data[1].f, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].m, data[2].v, data[2].o, data[2].F, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].m, data[3].v, data[3].o, data[3].F, data[3].points))

}

function createRow(name, m, v, o, f, points){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(m))
  aRow.appendChild(createCell(v))
  aRow.appendChild(createCell(o))
  aRow.appendChild(createCell(f))
  aRow.appendChild(createCell(points))
  return aRow
}

function createCell(content){ 
var aCell = document.createElement("td")
aCell.innerHTmL = content
return aCell;
}

age();