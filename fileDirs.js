const fs = require('fs');

//read current directory
fs.readdir('.', (err, files) => {
	if(err) throw err;
	console.log(files);
	var count = 0;
	files.forEach((file) => {
		console.log("file " + (count++) + " :: "+ file);	
	});
});

//create directory
fs.mkdir('dirTest', (err) => {
	if(err) throw err;
	console.log('dir created :: dirTest');
});

//fs.rmdir('dirTest', (err) => {
//	if(err) throw err;
//	console.log('dirTest removed');
//});


