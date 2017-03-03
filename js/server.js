var http = require('http');

function requestHandle(req,res)
{
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end("Hello, World!");
}

var server = http.createServer(requestHandle);
server.listen(8080);


// var http = require("http");

// http.createServer(function (request, response) {
// 	request.on("end", function () {
// 		response.writeHead(200, {
// 			'Content-Type': 'text/plain'
// 		});
// 		response.end('Hello HTTP!');
// 	});
// }).listen(8888);

// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   console.log(req.url);
//   res.end('Hello Http');
// });
// server.listen(8080);