const FIRST_RUN = 5000
const UPDATE_INTERVALL = 1000
setTimeout(age, FIRST_RUN);

function age(){
  var xhr = new XMLHttpRequest()
  //xhr.open ("GET", "/js/data.json")
  //xhr.open ("GET", "http://localhost:3001/football")
  xhr.open ("GET", "https://nasir-backend.herokuapp.com/football")
  xhr.onload = function (){
      var data = JSON.parse(this.response)
      createTable(data)
      setTimeout(age, UPDATE_INTERVALL);
  }
  xhr.send()
}




function createTable(data){
  
  var appElement = document.getElementById("app")
  var aTable = document.createElement("table")
  appElement.textContent = ""
  appElement.appendChild(aTable)
  console.table(data)
  for(tableRow of data){
    aTable.appendChild(createRow(tableRow))
  }
}

function createRow(tableRow){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(tableRow.position))
  aRow.appendChild(createCell(tableRow.name))
  aRow.appendChild(createCell(tableRow.m))
  aRow.appendChild(createCell(tableRow.v))
  aRow.appendChild(createCell(tableRow.o))
  aRow.appendChild(createCell(tableRow.f))
  aRow.appendChild(createCell(tableRow.points))
  return aRow
}

function createCell(content){ 
var aCell = document.createElement("td")
aCell.innerHTML = content
return aCell;
}