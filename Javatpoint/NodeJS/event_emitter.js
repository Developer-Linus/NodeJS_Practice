const EventEmitter = require("events");

myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on("greet", () =>{
    console.log("Good morning");
});

// Emit the event
myEmitter.emit("greet");

