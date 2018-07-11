const fs = require('fs');
const child = require('child_process');

console.log('--------exec----------');
for(var i = 0;i<3;i++){
	var workerProcess = child.exec('node support.js ' + i , (err, stdout, stderr) => {
		if(err)
			console.log(err + ' - ' + err.code + ' - ' + err.signal);
		
		console.log('stdout :: ' + stdout);
		console.log('stderr :: ' + stderr);

	});

	workerProcess.on('exit', (code) => {
		console.log('exiting :: '+ code);
	});
}
console.log('--------spawn----------');

for(var i = 0;i<3;i++){
	var worker = child.spawn('node' ,['support.js' , i]);
	worker.stdout.on('data', (data) => console.log('stdout :: ' + data));
	worker.stderr.on('data', (data) => console.log('stderr :: ' + data));
	
	worker.on('close', (code) => console.log('child process existed with code :: ' + code) );

}

console.log('--------fork----------');
for(var i = 0;i<3;i++){
	var worker = child.fork('support.js' , [i]);
	worker.on('close', (code) => console.log('child process existed with code :: ' + code) );

}

