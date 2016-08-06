var http = require("http");
var fs = require("fs");



http.createServer(onRequest).listen(3000);

function onRequest(request, response){
  response.writeHead(200, { "Content-type": "text/html"});
  // var myReadStream = fs.createReadStream(__dirname + "/public/html/index.html");
  // var myReadStream = fs.createReadStream(__dirname + "/public/html/index.html", "utf8");
  // var myWriteStream = fs.createWriteStream(__dirname + "/public/html/index.html");
  // myReadStream.pipe(myWriteStream);

  response.end("hello, you've got a start");
}
