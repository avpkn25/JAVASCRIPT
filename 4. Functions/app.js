// Function Decleration
// function greet() {
//   console.log("Hello from the greet");
// }
// call, run, execute
// greet();

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }
// sayHello("Praveen");
// sayHello("Chiro");

// return -> function

// function add(x, y) {
//   return x + y;
// }
// console.log(add(10, 20));

// Challenge - 1
// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.
// answer
// function myFunction(x, y) {
//   return x * y;
// }
// console.log(myFunction(10, 20));
// console.log(myFunction(29, 39));

// Function Declaration
// function sayHello(username) {
//   console.log(`Hello ${username}`);
// }
// sayHello("Praveen");
// Function Expression
// const greet = function (user) {
//   console.log(`Hello ${user}`);
// };
// greet("Lorem");

// Call back Functions
// showCallFunction (function () {})
// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallFunc(function (value) {
//   console.log(value);
// });

// function greet(name, cb) {
//   console.log(`Hello ${name}`);
//   cb();
// }
// function cb() {
//   console.log(`I am Callback function`);
// }
// greet("Praveen", cb);

// Challenge - 2
// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback function.
// answer
// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }
// function fn(value) {
//   console.log(value);
// }
// showCallFunc(fn);

// Scopes
// let textMess = "hi"; // global
// console.log(textMess);

// function showMess() {
//   let textMess = "hello"; // local
//   console.log(textMess);
// }
// showMess();

// for (let i = 0; i < 5; i++) {
//   console.log(i); // i variable i local variable
// }

// Methods
// function greet() {
//   return `Hello, my name is ${person.name} & I am ${person.age} years old`;
// }
// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };
// console.log(person.greet());

// const person = {
//   name: "Praveen",
//   age: 20,
//   greet: function () {
//     return `Hello, my name is ${person.name} & I am ${person.age} years old`;
//   },
// };
// console.log(person.greet());

// JSON - JavaScript Object Notation
// const person = {
//   name: "Praveen",
//   age: 20,
//   email: "praveen@gmail.com",
//   isSubscribed: true,
//   hobbies: ["Reading", "Running", "Cooking"],
//   address: {
//     city: "New York",
//     isFamous: true,
//   },
// };

// JSON.stringify() converts JSON to String
// const jsonStr = JSON.stringify(person);
// console.log(JSON.stringify(person));
//JSON.parse() converts String to JSON
// const parsed = JSON.parse(jsonStr);
// console.log(parsed);

