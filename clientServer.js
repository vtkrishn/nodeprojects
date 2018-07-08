//client server program

const http = require('http');
const net = require('net');
const url = require('url');

	//proxy server
	const proxy = http.createServer(
	(req,res) => {
		//writing Header		
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		//writing as acknowledgement		
		req.end('OKAY');
	});

	proxy.on('connect', (req, socket, head) => {
	
			console.log('Proxy trying to connect to the server');		
	
			const srvURL = url.parse('http://${req.url}');

			const serverSocket = net.connect(srvURL.port, srvURL.hostname, () => {
			socket.write('HTTP/1/1 200 Connection Established\r\n Proxy-agent: Node.js-Proxy\r\n\r\n');	
			serverSocket.write(head);
		
			serverSocket.pipe(socket);
			socket.pipe(serverSocket);
		});
	});

	proxy.listen(1337, '127.0.0.1' , () => {
	
		const options = {
			port : 1337,
			hostname : '127.0.0.1',
			method : 'CONNECT',
			path : 'www.google.com:80'
		};

		const req = http.request(options);
		req.end();

		req.on('connect', (res, socket, head) => {
			console.log('got connected');		
		
			socket.write('GET /HTTP/1.1\r\n Host: www.google.com:80\r\n Connection: close\r\n\r\n');

			socket.on('data', (chunk) => {
				console.log(chunk.toString());		
			});
		
			socket.on('end', () => {
				proxy.close();
			});				
		});
	});
