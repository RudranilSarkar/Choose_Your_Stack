var express = require('express');
var app = express();
var cors = require('cors')
const db = require('./queries')

let config = require('../config.json');
app.use(cors())

app.get('/connection', function (req, res) {
      res.send("Connected to Node backend");
   
})

app.get('/dbconnection', db.runQuery)

var server = app.listen(config.b_port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at port: %s",port)
})