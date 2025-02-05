// Used to handle and emit events
const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Register an event 
emitter.on('greet', ()=>{
    console.log('Hello, world!');
});

// Emit an event
emitter.emit('greet');