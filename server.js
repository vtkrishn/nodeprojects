const net = require('net');
var server = net.createServer((connection) => {
	console.log('connected');
	connection.on('end', ()=> {
		console.log('dis-connected');		
	});
	
	connection.write('Hello world\n');
});

server.listen(8080, ()=> {
	console.log('server listening');
});
