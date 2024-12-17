// # ARRAY DESTRUCTURING
// The name doesn't matter but the order does

// const foo = ["one", "two", "three"];
// const one = foo[0];
// console.log(one);

// const foo = ["one", "two"];
// const [red, blue, green] = foo;
// console.log(red);
// console.log(blue);
// console.log(green);

// let a, b;
// [a = 5, b = 8] = [1];
// console.log(a); // 1
// console.log(b); // 8

// function f() {
//   return [1, 2];
// }
// let a, b;
// [a, b] = f();
// console.log(a, b);

// How to ignore values
// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log(a, b);

// # Assigning the rest of an array to a variable
// const [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a);
// console.log(b);

// Challenge - 1
// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to seperate variables named color1, color2, and color3.
// After extracting the colors, log each variable's value to the console.
// const colors = ["red", "green", "blue", "yellow", "orange"];
// answer
// const colors = ["red", "green", "blue", "yellow", "orange"];
// const [color1, color2, color3] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// # OBJECT DESTRUCTURING
// The order doesn't matter but the name does

// const student = { name: "Praveen", age: 20, rollNo: 30306 };
// const { age, name, rollNo } = student;
// console.log(rollNo, age, name);

// Challenge - 2
// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country: "USA",
// };
// Answer
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country: "USA",
// };
// const { name, age, country } = person;
// console.log(name);
// console.log(age);
// console.log(country);

// How to rename the variables in the object destructuring
// const num = { x: 100, y: 200 };
// const { x: p, y: q } = num;
// console.log(p, q);

// # OBJECT DESTRUCTURING AND REST OPERATOR
// let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 };
// console.log(a);
// console.log(b);
// console.log(rest);

// Challenge - 3
// Your task is to use obejct destructuirng to extract the name, age, and country properties from the person object and assign them to seperate variables named personName, personAge, and personCountry.
// After extractring the properties, log each variable's value to the console.
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country: "USA",
// };
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "Male",
//   country: "USA",
// };
// const { name: personName, age: personAge, country: personCountry } = person;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);

// # FUNCTION DESTRUCTURING

// const person = {
//   name: "John Doe",
//   age: 30,
//   country: "USA",
// };
// function printPersonInfo({ name, age, country }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Country: ${country}`);
// }
// printPersonInfo(person);

// let options = {
//   title: "My Menu",
//   items: ["item1", "item2"],
// };
// function showMenu({
//   title,
//   width: w = 100,
//   height: h = 200,
//   items: [item1, item2],
// }) {
//   console.log(`${title} ${w} ${h}`);
//   console.log(item1);
//   console.log(item2);
// }
// showMenu(options);

// # NESTED DESTRUCTURING
// const songs = [
//   { name: "Locky You", singer: "Joyner", duration: 4.34 },
//   { name: "Just Like You", singer: "NF", duration: 3.23 },
//   { name: "Humble Singer", singer: "Kendrick Lamar", duration: 2.33 },
//   { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
//   { name: "Cold Sholder", singer: "Central Cee", duration: 5.23 },
// ];
// const [, , { singer }] = songs;
// console.log(singer);

// # DESTRUCTURING MIXTURE
// const data = {
//   user: {
//     id: 123,
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       country: "USA",
//     },
//     hobbies: ["Reading", "Painting", "Cooking"],
//     scores: {
//       math: 95,
//       science: 88,
//       history: 75,
//     },
//   },
//   products: [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 500 },
//   ],
//   settings: {
//     darkMode: true,
//     notifications: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//     language: "English",
//   },
// };

// const {
//   user: {
//     name,
//     age,
//     address: { city, country },
//     hobbies,
//     scores: { math, science, history },
//     email,
//   },
//   products: [product1, product2, product3],
//   settings: {
//     darkMode,
//     notifications: {
//       email: emailNotification,
//       sms: smsNotification,
//       push: pushNotification,
//     },
//     language,
//   },
// } = data;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Score: ${math}`);
// console.log(`Science Score: ${science}`);
// console.log(`History Score: ${history}`);
// console.log(`Product 1: ${product1.name} - ${product1.price}`);
// console.log(`Product 2: ${product2.name} - ${product2.price}`);
// console.log(`Product 3: ${product3.name} - ${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email Notification: ${emailNotification}`);
// console.log(`SMS Notificaitons: ${smsNotification}`);
// console.log(`Push Notifications: ${pushNotification}`);
// console.log(`Language: ${language}`);
