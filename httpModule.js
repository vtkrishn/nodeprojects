//http module

const http = require('http');
const url = require('url');


//createServer
http.createServer(
(req,res) => {
	res.writeHead(200 , {'Content-Type' : 'text/html'});	
	console.log('writing Simple Hello to the page');	
	var q = url.parse(req.url, true).query;	
	var txt = q.year + " " + q.month;	
	res.end(txt);
}
).listen(8080);
