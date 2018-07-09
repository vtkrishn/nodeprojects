const http = require('http');
const fs = require('fs');
const url = require('url');

//web server
http.createServer((req, res) => {

	var pathname= url.parse(req.url).pathname;
	console.log('request for '+ pathname + ' received');
	
	if(pathname === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Home page');
	}
	else{
		var requestedFile = pathname.substr(1);
		fs.readFile(requestedFile, (err,data)=> {
			if(err){
				console.log(requestedFile + ' do not exists');
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.end(requestedFile + ' do not exists');
			}
			else{
				console.log('Serving :: ' + requestedFile);				
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data.toString());
			}
		});
	}
	
}).listen(8080);

console.log('server running ar http://localhost:8080');
