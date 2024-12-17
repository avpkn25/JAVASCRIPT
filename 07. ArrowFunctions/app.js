// Traditional function expression
// function greet(username) {
//   return `Hello ${username}`;
// }
// console.log(greet("praveen"));

// arrow function
// const greet = (username) => `Hello ${username}`;
// console.log(greet("praveen"));

// another example
// function double(number) {
//   return number * 2;
// }
// console.log(double(4));

// arrow function
// const double = n => n * 2
// console.log(double(4));

// Challenge - 1
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.
// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// setTimeout( () => {
//     console.log("Hello");
//     setTimeout( () => {
//       console.log("Hey");
//       setTimeout( () => {
//         console.log("Namaste");
//         setTimeout( () => {
//           console.log("Hi");
//           setTimeout( () => {
//             console.log("Bonjour");
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);

// Enhanced Object Literals
// function user(name, age, work) {
//   return {
//     name: name,
//     age: age,
//     work: work,
//   };
// }
// const praveen = user("praveen", 20, "Programmer");
// console.log(praveen);

// or || both parameter and name are same then

// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//   };
// }
// const praveen = user("praveen", 20, "Programmer");
// console.log(praveen);
// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     intro () {
//       return `I am ${name} & I'm ${age} old and I am a ${work}`
//     }
//   };
// }
// const praveen = user("praveen", 20, "Programmer");
// console.log(praveen.intro());

// Challenge - 2 contans tasks
// Task - 1
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1;
// var b = 2;
// var c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };
// ES6 code
// const a = 1,
//   b = 2,
//   c = 3;
// obj = { a, b, c };
// console.log(obj);

// Task - 2
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };
// console.log(lib.sum(2,3)); // 5
// console.log(lib.mul(2,3)); // 6
// ES6
// const lib = {
//   sum: (a, b) => a + b,
//   mul: (a, b) => a * b,
// };
// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mul(2, 3)); // 6

// Task - 3
// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }
// console.log(getPersonES5("Praveen", 20, 175));
// answer
// function getPersonES6 (name, age, height) {
//   return {name, age, height}
// }
// console.log(getPersonES6("Praveen", 20, 175));

// Default Functions Parameters
// function counTo5 (count = false) { // here mentioning the value of the count as default value to false.
//   if(count === true) {
//     for(let i=1;i<=5;i++) {
//       console.log(`Count: ${i}`);
//     }
//   }
// }
// counTo5(true);

// if the user doesn't specify anything as parameters then the default parameters will be execute, if given then ignored.

// function ratings (rate = 0) {
//   if(rate===5) {
//     console.log(`Hight Ratings :)`);
//   } else if (rate === 0) {
//     console.log(`Low Ratings :(`);
//   }
// }
// ratings()

// Challenge - 3
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the paramters value
// 2. provide 1 as the default value to parameter "b"
// answer
// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(7));