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

// var firstName5 = 'Rajesh';
// var age5 = 28;
// firstName5 = 'Raja';

// console.log(firstName5);

// //ES6

// const firstName6 = 'Rajesh mama';
// let age6 = 28;
// // firstName6 = 'Rajesh RAJA';

// console.log(firstName6);

// //ES5 function-scoped

// function driverLicense5(passedTest){
//   if(passedTest){
//     var name5 = 'Rajesh';
//     var yearOfBirth = 1990;
//   }
//     console.log(name5+ ' '+yearOfBirth);
// }
// driverLicense5(true);

// //ES6 Block-scoped
// function driverLicense6(passedTest){
//   if(passedTest){
//     let name6 = 'Rajesh';
//     const yearOfBirth = 1990;
//   }
//     console.log(name6+ ' '+yearOfBirth);
// }
// driverLicense6(true);



//Arrow Functions

const years = [1990,1982,1973,1947];

//ES5
var age5 = years.map(function(el){
  return 2020 - el;
})
console.log(age5);

//ES6
let age6 = years.map(el => 2020 - el);
console.log(age6);

age6 = years.map((el, index) => 
  `Age element ${index + 1}: ${2020 - el}.`
);
console.log(age6);

age6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
})
console.log(age6);