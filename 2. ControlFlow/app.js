// Condition Statements
// if === money
// -> buy some stuff
// else !== money
// -> Bring some money dude

// if (condition) {...}
// else if (condition) {...}
// else {...}

// let a = 20;
// let b = 20;

// if (a > b) {
//   console.log("a is greater than b");
// } else if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("a and b are equal");
// }

// let time = 25;
// let greetings;

// if (time < 10) {
//   greetings = "Good Morning";
// } else if (time < 20) {
//   greetings = "Good Day";
// } else {
//   greetings = "good Evening";
// }
// console.log(greetings);

// Challenge - 1
// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password isless than or equal to 8 print "password io too Short"
// 4. if password is greater than or equal to 8 print "Too Long password" & "Password should be 8 characters"
// 5. If all fails then print "Please provide a password"
// answer
// let password;
// if (password === 8) {
//   console.log("Welcome");
// } else if (password <= 8) {
//   console.log("Password is too short");
// } else if (password >= 8) {
//   console.log("Too Long Password & Password should be 8 characters");
// } else {
//   console.log("Please provide a password");
// }

// Switch Statements
// switch (expression) {
//     case x:
//         print
//         break;
//     case y:
//         print
//         break;
//     default:
//         print
// }

// let x = 0;
// let bulb;
// switch (x) {
//   case 0:
//     bulb = "off";
//     break;
//   case 1:
//     bulb = "on";
//     break;
//   default:
//     bulb = "no value found";
// }
// console.log(bulb);

// let day = "friday";
// switch (day) {
//   case "monday":
//     console.log("today is monday");
//     break;
//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today is thursday");
//     break;
//   case "friday":
//     console.log("today is friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("Don't know that day is today");
// }

// Challenge - 2
// 1. Create variable name (fruit) & store "banana".
// 2. If case is "banana" print "Banana is good!".
// 3. If case is "Orange" print "I am not a fan of orange.".
// 4. If case is "Apple" print "How you like them apples?".
// 5. default "I have never heard of that fruit.".
// answer
// let fruit = "banana";
// switch (fruit) {
//   case "banana":
//     console.log("Banana is Good!");
//     break;
//   case "orange":
//     console.log("I am not a fan of orange.");
//     break;
//   case "apple":
//     console.log("How you like them apples?");
//     break;
//   default:
//     console.log("I have never heard of that fruit.");
// }

// for loop
// repeating a block of code
// DRY -> Don't Repeat yourself
// for (initialExpression; condition; incrementExpression ) {

// }
// for (let i = 1; i <= 10; i++) {
//     console.log("I am Praveen Kumar", i);
// }

// nested loop
// for(let i = 1; i <= 10; i++){
//     console.log("--Outer Loop--",i);
//     for(let j = 1; j <= 5; j++) {
//         console.log("--Inner Loop--",j);
//     }
// }

// Challenge - 3
// Print your name & numbers from 0 to 1000
// answer
// for(let i = 0; i <= 1000; i++) {
//     console.log("Praveen",i);
// }

// while loop
// while (condition) {
//     code block to be executed.
// }

// let i = 1;
// while(i <= 5) {
//     console.log("Hello World", i);
//     i++;
// }

// Challenge - 4
// Print "your name" 100 times to the console using while loop
// Iteration will start from 10
// let i = 10;
// while (i <= 100) {
//   console.log("Praveen ", i);
//   i++;
// }

// do-while-loop
// do {
//    block of code to execute
// } while(condition);
// let i = 1;
// do {
//   console.log("Praveen", i);
//   i++;
// } while (i <= 5);

// Challenge - 5
// print "your name" 400 times to the console using do-while-loop.
// Iteration should start from 20
// answer
// let i = 20;
// do {
//   console.log("Praveen ", i);
//   i++;
// } while (i <= 400);

// Logical Operators

// 1. Logical AND (&&)
// TRUE if both the operands/boolean values are true, else evaluates to FALSE

// const a = true;
// const b = true;
// const c = 4;
// console.log(a && b); // true
// console.log(c>2 && c<2); // false

// 2. Logical OR (||)
// TRUE if either of the operands/boolean vlaues is true. evaluates to false if both are false.

// const a = false;
// const b = true;
// const c = 4;
// console.log(a || b); // true
// console.log(c>2 || c<2); // true

// 3. Logical NOT (!)
// TRUE if the operands if false and vice-versa.
// const a = true;
// console.log(!a);

// let password = "praveen-kumar";
// if (password.length >= 8 && password.includes("rave")) {
//   console.log("Valid Password");
// } else {
//   console.log("Invalid Password");
// }

// let isTrue = true
// console.log(!isTrue);