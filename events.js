// Define evetns module
var event = require('events');
// Define an event emitter object
var e = new event.EventEmitter();


// Define a function to be executed
// event name is 'sayHello'
// when the event is emitted , the function is executed and print 'Hello'
e.on('sayHello', function(data) {
    console.log('Hello ' +data);
});


// Emit the event
e.emit('sayHello',"Nourhan");