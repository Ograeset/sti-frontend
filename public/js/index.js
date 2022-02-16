function insertrow(){
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
}