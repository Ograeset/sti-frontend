//app.js

const express = require("express")
var favicon = require('serve-favicon')
var path = require ('path')
const res = require("express/lib/response")

const PORT = process.env.PORT || 3000

const app = express()
app.use('/healthcheck', require('./routes/healthcheck.routes'));
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico)))
  app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})

function createRow(){
  //acces the table and store it in a variable
  var table = document.querySelector("#mytable");
  //create rows and store it in a variable
  var row = table.insertRow();
  //now adding data to table
  row.inneHTML = "<td>data1</td><td>data2</td><td>data3</td>";
}
