const fs = require('fs');

var buf = new Buffer(1024);

fs.open('file.txt', 'r+', (err,fd) => {
	if(err) console.log(err.stack);
	console.log('file opened successfully');
	
	//writing to the file
	fs.writeFile('file.txt', 'something is nothing and nothing is anything\n', (err) => {
		if(err) throw err;
		console.log('File write successful');
	});
	
	//read from the file
	fs.readFile('file.txt', (err,data) => {
		if(err) throw err;		
		console.log('Normal Read :: '+data);
	});	

	//read file using file descriptor
	fs.readFile(fd, buf, 0, buf.length, (err,data) => {
		if(err) throw err;
		console.log('With file descriptor and buffer :: '+data);
	});
	
	//file stats
	fs.stat('file.txt', (err, stats) => {
		if(err) throw err;
		console.log('IsFile :: ' + stats.isFile());
		console.log('IsDirectory :: ' + stats.isDirectory());
		console.log(stats);
	});
	
	//truncate file
	fs.ftruncate(fd, 2, (err) => {
		if(err) throw err;
		console.log('File truncated ..');
	});

	//delete the file
	fs.unlink('file.txt', (err) => {
		if(err) throw err;
		console.log('File deleted');
	});

	//close the file
	fs.close(fd, (err) => {
		if(err) throw err;
		console.log('file closed');
	});
});
