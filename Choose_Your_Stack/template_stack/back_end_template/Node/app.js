var express = require('express');
var app = express();

let config = require('../config.json');

app.get('/connection', function (req, res) {
      res.send( "Connected to Node backend" );
   
})

var server = app.listen(config.b_port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})