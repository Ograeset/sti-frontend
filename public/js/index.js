/* function insertrow(){
  var table = document.querySelector('#myTable');
  var row = table.insertRow();
 
var cell1 = row.insertCell();
  cell1.innerHTML = "Haltande Allsvenska";
   var cell2 = row.insertCell();
  cell2.innerHTML = <a href="fotboll.html">See for yourself</a>;
var cell3 = row.insertCell();
  cell3.innerHTML = "The Wave";
var cell4 = row.insertCell();
  cell4.innerHTML = <a  href="theWave.html">The wave called Dawe</a>
}
  

function deleterow(){
  var table = document.querySelector("#myTable");
  table.deleteRow(1);
} */


/* var ettElement = document.getElementById("app")

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
  aTable.appendChild(createRow(data[0].name, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].points))

}

function createRow(name, points){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(points))
  return aRow
}

function createCell(content){ 
var aCell = document.createElement("td")
aCell.innerHTML = content
return aCell;
}

age();   */