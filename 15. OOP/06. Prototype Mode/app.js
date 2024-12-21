// const obj = {};
// console.log(obj);

// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__); // null

// console.log(obj.constructor.prototype);

// console.log(Object.getPrototypeOf(obj));

// const arr = new Array();
// console.log(arr);

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// function Person(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
// }
// const praveen = new Person("Praveen", "Kumar", "Java");
// console.log(praveen);

// console.log(praveen.__proto__);

// *************** Changing the Built-in Method
// console.log(Array.prototype);

// Array.prototype.pop = function () {
//   return "POPED";
// };

// const arr = [1, 2, 3];
// console.log(arr.pop());

// *************** Creating our own Method
// String.prototype.hello = function () {
//   console.log(this);
//   console.log(this.toUpperCase());
// };
// console.log("hello and welcome".hello());

const arr = ["hello", "hii", "namaste"]
console.log(arr);