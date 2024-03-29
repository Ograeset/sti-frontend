const express = require("express")
var favicon = require('serve-favicon')
var path = require ('path')
const res = require("express/lib/response")
//const { Tone } = require("tone/build/esm/core/Tone")

const PORT = process.env.PORT || 3000

const app = express()
app.use('/healthcheck', require('./routes/healthcheck.routes'));
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico)))
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/football', function(req, res){
    res.sendFile(__dirname + "/public/fotboll.html")
})

app.get('node_modules/tone', function(req, res){
  res.sendFile(__dirname + "/public/theWave.html")
})
app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})

