// console.log(window);

// console.log(this); // window object

// console.log(this === window); // window object

// window.firstName = "Praveen"
// this.lastName = "Kumar"
// console.log(window);

//-------------------------

// function printThis() {
//   return this;
// }
// const res = printThis();
// console.log(res);

//-------------------------

// const obj = {
//   firstName: "Praveen",
//   lastName: "Kumar",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`; // "owner" obj
//   },
// };
// const res = obj.fullName();
// console.log(res);

//-------------------------

// const obj = {
//   firstName: "Praveen",
//   lastName: "Kumar",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`; // window
//   },
// };
// const res = obj.fullName();
// console.log(res);

// Challenge - 1
// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using regular function
// --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
// --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// answer
// const person = {
//   name: "Praveen",
//   age: 20,
//   greetRegular: function () {
//     return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
//   },
//   greetArrow: () => {
//     return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
//   },
// };

// console.log(person.greetRegular());
// console.log(person.greetArrow());
