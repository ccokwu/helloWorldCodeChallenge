console.log("Hello world");





























// var http = require('http');
//     fs = require('fs');
//
//     var express = require('express');
//     app = express();
//     app.use('/public', express.static(__dirname + '/public'));
//     // app.listen(8000);
//
// fs.readFile("public/html/index.html", function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(8000);
// });
//
//
//
//
//
//
//
//
//
// // var http = require("http");
// // var fs = require("fs");
// // var app = require("express");
// //
// // app.use(express.methodOverride());
// // app.use(app.router);
// // app.use(express.static(path.join(__dirname, "/public/html/index.html")));
// // app.get("/public/html/index.html", routes.index);
// //
// // http.createServer(onRequest).listen(3000);
// //
// // function onRequest(request, response){
// //   response.writeHead(200, { "Content-type": "text/html"});
// //   // var myReadStream = fs.createReadStream(__dirname + "/public/html/index.html");
// //   // var myReadStream = fs.createReadStream(__dirname + "/public/html/index.html", "utf8");
// //   // var myWriteStream = fs.createWriteStream(__dirname + "/public/html/index.html");
// //   // myReadStream.pipe(myWriteStream);
// //
// //   response.end("hello, you've got a start");
// // }
