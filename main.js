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

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// //Register an Event
// emitter.on('messageLogged', function(){
//   console.log('Listner Called')
// })
// //Raise an event
// emitter.emit('messageLogged');

//ES5

var firstName5 = 'Rajesh';
var age5 = 28;
firstName5 = 'Raja';

console.log(firstName5);

//ES6

const firstName6 = 'Rajesh mama';
let age6 = 28;
// firstName6 = 'Rajesh RAJA';

console.log(firstName6);

//ES5 function-scoped

function driverLicense5(passedTest){
  if(passedTest){
    var name5 = 'Rajesh';
    var yearOfBirth = 1990;
  }
    console.log(name5+ ' '+yearOfBirth);
}
driverLicense5(true);

//ES6 Block-scoped
function driverLicense6(passedTest){
  if(passedTest){
    let name6 = 'Rajesh';
    const yearOfBirth = 1990;
  }
    console.log(name6+ ' '+yearOfBirth);
}
driverLicense6(true);