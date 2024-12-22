// function addNumbers(a, b) {
//   return a + b;
// }

// function multiplyNumbers(c, d) {
//   return c * d;
// }

// const res1 = addNumbers(2, 3);
// const res2 = multiplyNumbers(res1, 4);

// console.log(res2);

// Synchronous Code
// function myFunction() {
//   console.log("Inside function");
// }
// console.log("start");
// myFunction();
// console.log("End");

// Asynchronous Code
console.log("Start");
setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);
console.log("End");
