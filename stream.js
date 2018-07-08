console.log('Read Stream Example');

const fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

//event data
readerStream.on('data', (chunk) => {
	data += chunk;
});

//event end
readerStream.on('end', () => {
	console.log(data);
});

//event error
readerStream.on('error', (err) => {
	console.log(err.stack);
});

console.log('Read Program Ended');



console.log('Write Stream Example');

data = 'Write Example';

var writedStream = fs.createWriteStream('output.txt');

//write the data
writedStream.write(data, 'UTF8');

//mark the end of the write stream
writedStream.end();

//event end
readerStream.on('finish', () => {
	console.log('Write Completed');
});

//event error
readerStream.on('error', (err) => {
	console.log(err.stack);
});

console.log('Write Program Ended');
