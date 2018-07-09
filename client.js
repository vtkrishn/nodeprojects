const net = require('net');
var client = net.connect({port:8080}, ()=> {
	console.log('connected to the server');
});

client.on('data', (data)=> {
	console.log(data.toString());	
});

client.on('end', ()=> {
	console.log('disconnected from the server');
});

client.emit('end');


