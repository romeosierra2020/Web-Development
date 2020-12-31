const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log(eventEmitter);
eventEmitter.on('tutorial', ()=> {
    console.log('Event Occured');
});


eventEmitter.emit('tutorial');
