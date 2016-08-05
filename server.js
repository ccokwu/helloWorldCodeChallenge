//setting up

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("bodyParser");
var methodOverride = require("methodOverride");

//configuration

mongoose.connect("mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu");

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({"extended" : "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());

//listen (start app with node server.js)
app.listen(8080);
console.log("App is listening on port 8080");