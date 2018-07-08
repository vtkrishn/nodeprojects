const events = require('events');
var emitter  = new events.EventEmitter();

//listener1
var one = () => {
	console.log('listener 1 called tied to "one" event');
}

//listener2
var two = () => {
	console.log('listener 2 called tied to "two" event');
}

emitter.on('one', one);
emitter.on('two', two);

emitter.emit('two');
emitter.emit('one');


//listener3
var three = () => {
	console.log('listener 3 called tied to "others" event');
}

var four = () => {
	console.log('listener 4 called tied to "others" event');
}

emitter.addListener('others', three);
emitter.on('others', four);

emitter.emit('others');

var eventListeners = events.EventEmitter.listenerCount(emitter, 'others');
console.log('total listeners for "others" event :: ' + eventListeners);

console.log('Removing listener "four" from "others" event');
emitter.removeListener('others', four);

eventListeners = events.EventEmitter.listenerCount(emitter, 'others');
console.log('total listeners for "others" event :: ' + eventListeners);

console.log('Program ended');


