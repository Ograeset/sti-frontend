/* function createRow(){
  //acces the table and store it in a variable
  var table = document.querySelector("#mytable");
  //create rows and store it in a variable
  var row = table.insertRow();
  //now adding data to table
  row.innerHTML = "<td>data1</td><td>data2</td><td>data3</td>";
}*/

var anElement = doocument.getElementById("app")

anElement.innerHTML = "Hello world"
anElement.outerHTML = "Hello world"

function age(){
  var xhr = new XMLHttpRequest()
  xhr.open ("GET", "/js/data.json")
  xhr.onload = function (){
      var data = JSON.parse(this.response)
      createTable(data)
  }
  xhr.send()
}




function createTable(data){
  var appElement = document.getElementById("app")
  var aTable = document.createElement("table")
  apppElement.appendChild(aTable)
  aTable.appendChild(createRow(data[0].name, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].points))

}

function createRow(name, points){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(name))
  return aRow
}

function createCell(content){ 
var aCell = document.createElement("td")
aCell.innerHTML = content
return aCell;
}