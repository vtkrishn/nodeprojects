const fs = require('fs');

//in node all async calls takes a callback and the first parameter is an error object
fs.readFile('open2.txt', (err, data, third) => {
	if(err) throw err;
	console.log('Async Call - File read');
	for(var i = 0;i<data.length;i++)	
		console.log(String.fromCharCode(data[i]));
});

//sync call
console.log('Sync call - File read');
var data2 = fs.readFileSync('open2.txt');
for(var i = 0;i<data2.length;i++)	
		console.log(String.fromCharCode(data2[i]));

