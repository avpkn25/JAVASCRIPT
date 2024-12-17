// for in loop

// let person = {
//   name: "Praveen",
//   age: 20,
//   gender: "male",
// };
// for (let key in person) {
//   console.log(key, person[key]);
// }

// let list = ["one", "two", "three", "four"];
// for (let i in list) {
//   console.log(`${i} ${list[i]}`);
// }

// Challenge - 1
// Iterate over object & log the property and the value of that object using for in loop.
// const object = { a: 1, b: 2, c: 3 };
// answer
// const object = { a: 1, b: 2, c: 3 };
// for (let o in object) {
//   console.log(`${o} ${object[o]}`);
// }

// for of loop

// let peoples = ["Praveen", "vishnu", "abhi"];
// for (let people of peoples){
//     console.log(people);
// }

// const text = "Hello"
// for(let c of text) {
//     console.log(c);
// }

// Challenge - 2
// Iterate over "array1" & log the values using for of loop.
// const array1 = ["a", "b", "c"];
// answer
// const array1 = ["a", "b", "c"];
// for (let ch of array1) {
//   console.log(ch);
// }

// FOR EACH LOOP

// const colors = ["teal", "blue", "red", "green"];
// colors.forEach((color) => console.log(color));

// const words = ["words", "bird", "table", "football"];
// words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

// Challenge - 3
// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. Print the sum variable.
// answer
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// nums.forEach((x) => (sum += x));
// console.log(sum);
