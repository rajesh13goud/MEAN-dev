// const nemo = ['Nemo'];
// const large = new Array(100).fill('Nemo');

// function findNemo(array){
//   for(let i = 0; i < array.length; i++){
//     if(array[i] === 'Nemo'){
//       console.log('Found Nemo!')
//     }
//   }
// }
// findNemo(large);

const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register an Event
emitter.on('messageLogged', function(){
  console.log('Listner Called')
})
//Raise an event
emitter.emit('messageLogged');