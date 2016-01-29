var express = require('express');
var app = express();

// Stub
app.get('/api/', function(req, res){
  res.send("Hello World!");
});

app.listen(8080);
