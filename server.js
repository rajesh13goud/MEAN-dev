const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register an Event
emitter.on('messageLogged', function(){
  console.log('Listner Called')
})
//Raise an event
emitter.emit('messageLogged');