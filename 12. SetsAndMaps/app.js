// Map Data Structure

// const map = new Map();
// const key1 = "string";
// const key2 = {};
// const key3 = function () {};

// map.set(key1, "Value of key 1");
// map.set(key2, "Value of key 2");
// map.set(key3, "Value of key 3");

// console.log(map); // displays the map
// console.log(map.keys()); // display only keys in the map
// console.log(map.values()); // display only values in the mao
// console.log(map.delete(key3)); // display the deletion status true/false
// console.log(map);
// console.log(map.size); // displays the size of the map

// for(let [key, value] of map) {
//     console.log(`${key} - ${value}`);
// }

// for(let key of map.keys()) {
//     console.log(`${key}`);
// }

// for(let value of map.values()) {
//     console.log(`${value}`);
// }

// Challenge - 1
// 1. Create a new Map
// 2. Set these properties ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.
// answer
// const map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// console.log(map.get("a"));
// console.log(map.size);
// console.log(map.delete("b"));
// console.log(map.size);

// Set Data Structure
// const set = new Set();
// set.add(1);
// set.add("praveen");
// console.log(set);
// console.log(set.has("praveen"));
// console.log(set.delete("praveen"));
// console.log(set);

// for(let item of set) {
//     console.log(`${item}`);
// }

// Challenge - 2
// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as values
// 3. Iterate over Set & log the values.
// answer
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// for (let letter of letters) {
//   console.log(`${letter}`);
// }

// SYMBOL
//Symbol()
// const mySymbol = Symbol();
// console.log(typeof mySymbol);

// const mySymbol = Symbol("My custom Symbol");
// console.log(mySymbol);

// Comparing Sybmols
// const mySymbol1 = Symbol("name");
// const mySymbol2 = Symbol("name");
// console.log(mySymbol1 === mySymbol2);

// const obj = {};
// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";
// console.log(obj);

// const symbol1 = Symbol("name");
// const symbol2 = Symbol("name");
// const person = {};
// person.age = 20;
// person["gender"] = "female";
// person["gender"] = "male";
// person[symbol1] = "Praveen";
// person[symbol2] = "Kumar";
// console.log(person);

// Challenge - 3
// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.
// answer
// const mySymbol = Symbol("foo");
// // console.log(typeof mySymbol);
// const obj = {firstName: "John", lastName: "Doe"};
// obj[mySymbol] = "value";
// // console.log(obj);
// for (let i in obj) {
//   console.log(i);
// }
