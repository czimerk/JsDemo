var static = require("node-static");
var http = require("http");

var file = new static.Server("./public");
var portNumber = 8080;
http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(portNumber);

console.log("server listening at port " + portNumber);
