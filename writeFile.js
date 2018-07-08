const fs = require('fs');

//write content to the file
fs.writeFile('open2.txt', 'Hello Again \n', (err) => {
	if(err) throw err;
	console.log('Saved');
});

//Delete the file 
fs.unlink('open.txt', (err) => {
	if(err) throw err;
	console.log('Open.txt Deleted');
});
