var tableData = [
  {name:"AIK", m:3, v:3, o:0, f:0,points:9}
  ,{name:"Hammarby IF", m:3, v:1, o:2, f:0, points:6}
  ,{name:"BP", m:3, v:1, o:2, f:0, points:5}
  ,{name:"BK Häcken", m:3, v:0, o:0, f:3, points:3}
]
tableData = JSON.stringify(tableData)
console.log(tableData)

var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)



function buttonClick(){
  aTable.appendChild(createRow())
}

function createRow(){
  var aRow = document.createElement("tr") 
  aRow.appendChild(createCell())   
  return aRow
}

function createCell(){
  var aCell = document.createElement("td")
  return aCell;
}

function createTable(){
  
}