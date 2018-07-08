//variable for the http module
var http = require('http');

//create the server taking the function
http.createServer(
	//function with request and response
	function (req,res){
		//set the response write type
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		//print this to the web page
		res.end('Hello World');
	}
).listen(8080); //listening port
