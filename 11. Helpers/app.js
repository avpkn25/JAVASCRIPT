// # Map Helper

// let numbers = [1, 2, 3, 4, 5];
// let double = numbers.map((num) => num * 2);
// console.log(double);

// let peoples = [
//   { firstName: "Praveen", lastName: "Kumar" },
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Alex", lastName: "John" },
// ];
// let results = peoples.map((person) => [person.firstName, person.lastName]);
// console.log(results);

// Challenge - 1
// 1. Create array with random number.
// 2. Map over each item in that array, & multiply each item by 10.
// answer
// let nums = [5, 6, 7, 8, 9];
// let res = nums.map(n => n * 10);
// console.log(res);

// # Filter Helper

// const songs = [
//   { name: "Lucky You", duration: 4.34 },
//   { name: "Just Like You", duration: 3.23 },
//   { name: "The Search", duration: 2.33 },
//   { name: "Old Town Road", duration: 1.43 },
//   { name: "The Box", duration: 5.23 },
// ];
// console.log(songs.filter((song) => song.duration > 3));

// const computers = [
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 200 },
//   { ram: 16, hdd: 300 },
//   { ram: 32, hdd: 400 },
// ];
// console.log(computers.filter((computer) => computer.ram > 16));

// Challenge - 2

// Task - 1
// 1. Iterate over "ages" array
// 2. Print only adults, those who's age is greater than 18
// const ages = [32, 33, 16, 40];
// answer
// const ages = [32, 33, 16, 40];
// console.log(ages.filter((age) => age > 18));

// Task - 2
// 1. Iterate Over "words" array.
// 2. Print only those words whcih length is greater than 6
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// answer
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// console.log(words.filter((word) => word.length > 6));

// # Find Helper

// const peoples = [
//   { name: "praveen", age: 20 },
//   { name: "John", age: 18 },
//   { name: "alex", age: 22 },
//   { name: "jimmy", age: 17 },
//   { name: "alex", age: 30 },
// ];
// console.log(peoples.find((person) => person.name === "alex"));

// const posts = [
//   { id: 1, content: "good post" },
//   { id: 2, content: "funny post" },
//   { id: 3, content: "sad post" },
//   { id: 4, content: "funny post" },
// ];
// console.log(posts.find((post) => post.content === "funny post"));

// Challenge - 3
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater than 18
// const ages = [3, 10, 18, 20];
// answer
// const ages = [3, 10, 18, 20];
// console.log(ages.find((age) => age > 18));

// Challenge - 4
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);
// answer
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// console.log(products.find((product) => product.category === "Books"));

// # Every and Some Helpers

// const peoples = ["praveen", "john", "alex"];
// // Every Helper
// console.log(peoples.every((person) => person.length === 4));
// // Some Helper
// console.log(peoples.some((person) => person.length < 5));

// const songs = [
//   { name: "Lucky You", duration: 4.34 },
//   { name: "Just Like You", duration: 3.23 },
//   { name: "The Search", duration: 2.33 },
//   { name: "Old Town Road", duration: 1.43 },
//   { name: "The Box", duration: 5.23 },
// ];
// const everyRes = songs.every((song) => song.duration > 3);
// console.log(everyRes);
// const someRes = songs.some((song) => song.duration > 3);
// console.log(someRes);

// Challenge - 5
// REFACTOR -> USE EVERY & SOME HELPERS
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let allProductsBooks = true;
// let someProductsBooks = false;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].category != "Books") {
//     allProductsBooks = false;
//   } else {
//     someProductsBooks = true;
//   }
// }
// console.log(allProductsBooks);
// console.log(someProductsBooks);
// answer
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// // Do all Products have a category of Books?
// console.log(products.every((product) => product.category === "Books"));
// // Do atleast one Product have a category of Books?
// console.log(products.some((product) => product.category === "Books"));

// # Reduce Helper

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((p, c) => p + c, 0);
// console.log(sum);

// const peoples = [
//   { name: "praveen", age: 20 },
//   { name: "John", age: 29 },
//   { name: "Alex", age: 40 },
// ];
// const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);
// console.log(oldestAge);

// const words = [
//   "apple",
//   "banana",
//   "orange",
//   "banana",
//   "apple",
//   "orange",
//   "apple",
//   "grape",
// ];
// const unique = words.reduce((frequencyMap, word) => {
//   frequencyMap[word] = frequencyMap[word] || 0 + 1;
//   return frequencyMap;
// }, {});
// console.log(unique);

// Challenge - 6
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.
// write the calculateProduct function using the reduce() method to achieve this task.
// something like this 👇
// const numbers = [2, 3, 4, 5];
// const product = calculateProduct(numbers);
// console.log(product); // 120
// answer
// const numbers = [2, 3, 4, 5];
// console.log(numbers.reduce((p, c) => p * c, 1));
