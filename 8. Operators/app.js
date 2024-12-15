// Spread Operators '...'
//
// Functions, Arrays, Objects.

// functions
// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }
// const colors = ["red", "green", "blue", "yellow"];
// giveMe4(...colors);

// Arrays
// it expands the array to individual characters.
// const strNums = ['one', 'two', 'three']
// const moreStrNums = ['four', 'five', 'six']
// const concat = [...strNums, ...moreStrNums]
// console.log(concat);

// let peoples = ['praveen', 'john','alex']
// console.log('kumar', ...peoples);

// Objects
// const obj1 = {x: 1, y: 2}
// const obj2 = {z: 3}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// let person = {
//   name: "Praveen",
//   age: 20,
//   gender: "Male",
// };
// const clone = { ...person };
// console.log(clone);

// Challenge - 1
// 1. Make a clone of "arr, arr2" by using spread operator.
// 2. Make a clone of "user" object using spread operator.
// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// const user = {
//   name: "Jen",
//   age: 22,
// };
// answer
// let arrCl = [...arr];
// console.log(arrCl);
// let arr2Cl = [...arr2];
// console.log(arr2Cl);
// let userCl = { ...user };
// console.log(userCl);

// Rest Operator '...'

// function user(...userData) {
//   console.log(userData);
// }
// user("Praveen", 20, "Pragramming", "cricket");

// function person(firstname, lastname, ...hobbies) {
//   console.log(`${firstname} ${lastname} ${hobbies}`);
// }
// person("Praveen", "Kumar", "Programming", "Cricket", "singing");

// Challenge - 2
// Create a function which will take unlimited amount of parameters & log all of that params to the console.

// function data(...items) {
//   console.log(items);
// }
// data(1, 2, 3, 4, 5, 4, 6, 7, 6, 54, 3, 3);
