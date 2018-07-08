const events = require('events');

var eventEmitter = new events.EventEmitter();


var connectionHandler = () => {
	console.log('Connection Successful');

	eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectionHandler);

eventEmitter.on('data_received', () => {
	console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log('Program ended');


