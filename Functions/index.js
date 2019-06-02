// console.log(doSomething);
// doSomething();

// function doSomething() {
//   console.log('Declare Something');
// }

// console.log(something);
// something();

// var something = function doSomething(a) {
//   console.log('this is doing something', a);
// };

// something('hello');

// Function Declarations are hoisted. Function Expressions are not

// function useParam(a) {
//   console.log(`This will output: ${a}`);
// }

// useParam();

// var runIt = function(a) {
//   console.log(a);
//   a();
// };

// runIt(function() {
//   var b = 'Now';
//   console.log(`Running ${b}`);
// });

(function IIFE(arg) {
  console.log(`The argument is ${arg}`);
})('Beef Stew');
