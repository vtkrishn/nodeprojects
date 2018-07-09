var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
var emitter1 = new EventEmitter();

//create domain1
var domain1 = domain.create();

//domain1 listener for error
domain1.on('error', (err) => {
	console.log('from domain1 listener - missed from emitter1 scope :: ' + err.message + '\n');
});

//add emitter1 for domain1
domain1.add(emitter1);

//emitter1 listener for error
emitter1.on('error', (err) => {
	console.log('from emitter1 listener :: ' + err.message + '\n');
});

//emit error event
emitter1.emit('error', new Error('emitter1 before removing removing all listeners'));
//remove all event listeners
emitter1.removeAllListeners('error');

//emit error event after removing all listeners which will be caught by the domain1
emitter1.emit('error', new Error('emitter1 after removing removing all listeners'));

//create domain2
var domain2 = domain.create();

//domain2 listener for error
domain2.on('error', (err) => {
	console.log('from domain 2 listener :: ' + err.message + '\n');
});

//emitter2 emit error inside domain2
domain2.run(()=> {
	var emitter2 = new EventEmitter();
	emitter2.emit('error', new Error('emitter2 inside domain2 run method'));
});

//remove emitter1 for domain1
domain1.remove(emitter1);

//emit error again which will not be caught causing exception
emitter1.emit('error', new Error('Converted to Exception from emitter1'));


