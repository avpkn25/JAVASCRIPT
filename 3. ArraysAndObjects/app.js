// Arrays -> 0 index based
// []
// empty array
// const myList = [];
// console.log(myList);

// const nums = [1, 2, 3, 4, 5];
// console.log(nums);

// const strs = ["eat", "sleep", "code", "repeat"];
// console.log(strs);

// accessing items from our array
// const strs = ["eat", "sleep", "code", "repeat"];
// console.log(strs[2]);

// Nested Array or Two Dimensional Array
// const nestArr = ["one", ["two", "three"], "four"];
// console.log(nestArr);
// console.log(nestArr[1][2]);

// const myLetters = ["h", "e", "l", "l", "o"];
// console.log(myLetters);

// Challenge - 1
// 1. Create array name (favSingers) Store favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now access each item in that array by using [] notation.
// answers
// const favSingers = ["anirudh", "thaman", "dsp"];
// console.log(favSingers[0]);
// const favNumbers = [9, 8, 7, 6];
// console.log(favNumbers);
// const mixedArr = ["string", ["otherarray"], 123, true];
// console.log(mixedArr[0]);
// console.log(mixedArr[1]);
// console.log(mixedArr[1][0]);
// console.log(mixedArr[3]);

// Array Methods

// const fruits = ["apples", "bananas", "pineapples", "mango", "orange"];
// console.log(fruits);
// console.log(fruits.length);

// fruits.push("grape") // add at the end
// console.log(fruits);
// console.log(fruits.length);

// fruits.pop() // remove at the end
// console.log(fruits);
// console.log(fruits.length);

// fruits.shift(); // remove at the start
// console.log(fruits);

// fruits.unshift("grape"); // add at the start
// console.log(fruits);

// const newFruits = ["pomogranate", "strawberries", "grape"];
// const totalFruits = fruits.concat(newFruits); // combine morethan one array
// console.log(totalFruits);

// const pl = ["JavaScript", "Golang", "Java", "Python"];
// const nums = [5, 4, 3, 2, 1];
// console.log(pl.includes("Java")); // true
// console.log(pl.includes("PHP")); // false
// console.log(pl.join("-")); // join array with given text
// console.log(pl.reverse()); // reverse the array
// console.log(pl.slice(1,4));
// console.log(nums.sort()); // sorts the array in ascending order

// OBJECTS
// {}
// Key and Value || Property and Value
// const person = {
//   firstName: "Praveen",
//   lastName: "Kumar",
//   age: 20,
//   location: ["Planet", "Earth"],
//   isProgrammer: true,
// };
// console.log(person);
// console.log(typeof person); // object

// Accessing Items from our object
// console.log(person.age);
// console.log(person.isProgrammer);
// console.log(person["location"]);

// adding new value to the object
// person.newName = "Chiro";
// console.log(person);

// deleting value in the object
// delete person.isProgrammer;
// console.log(person);

// Challenge - 2
// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the connsole.
// answer
// const car = {
//   type: "benz",
//   model: "A12",
//   color: "black",
// };
// console.log(typeof car);
// console.log(car.type);
// car.type = "Toyato";
// car.wheels = 4;
// console.log(car);

