const fs = require('fs');

fs.appendFile('demofile.txt','Hello content', (err) => {
	if(err) throw err;
	console.log('Saved .');
});
