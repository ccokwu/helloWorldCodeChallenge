var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
  response.send("hello world");
});

var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;
