console.log('File name : ' + __filename);

console.log('Directory name : ' + __dirname);

//call after 2 second
var t = setTimeout(() => {
	console.log('call');
}, 2000);

//clear the timeout
clearTimeout(t);

//call every 2 seconds
//var callFunction = function () {
//	console.log('call function');
//}
//var loop = setInterval(callFunction, 2000);

//console
console.info('Program started - Console');

var variable = 10;
console.log('simple some variable ' , variable);

console.time('Data ');
while(variable > 0){
   variable--;
   console.log('variable value :: '+ variable);
}
console.timeEnd('Data ');

//process
process.on('exit', (code) => {
	setTimeout(()=>{
		console.log('This will not return');
	});
	console.log('Exiting the program');
});

process.stdout.write('stdout.write \n');
process.argv.forEach((val)=>{
	console.log(val);
});

console.log(process.memoryUsage());



