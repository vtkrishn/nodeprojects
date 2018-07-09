console.log('File name : ' + __filename);

console.log('Directory name : ' + __dirname);

//call after 2 second
var t = setTimeout(() => {
	console.log('call');
}, 2000);

//clear the timeout
clearTimeout(t);

//call every 2 seconds
var callFunction = function () {
	console.log('call function');
}
var loop = setInterval(callFunction, 2000);

