// NEW KEYWORD
// 1. First Create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

// function CreatePeople(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
//   this.info = function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
//     );
//   };
// }

// const john = new CreatePeople("John", "Doe", "JavaScript");
// console.log(john);

// const praveen = new CreatePeople("Praveen", "Kumar", "Java");
// console.log(praveen);
// praveen.info();

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getInfo = function () {
//     console.log(`${this.title} - ${this.author} - ${this.year}`);
//   };
// }
// const book1 = new Book("Can't Hurt Me", "David Goggins", 2014);
// const book2 = new Book("Atomic Habits", "James Clear", 2019);
// book1.getInfo();
// book2.getInfo();

// Challlenge - 1
// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameters values to the call objects
// 3. Create a method name(info), which will just print the info.
// 4. Create a few instances
// 5. Access each property
// answer
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.info = function () {
//     console.log(`${this.name} - ${this.age} - ${this.gender}`);
//   };
// }
// const praveen = new Person("Praveen", 20, "Male");
// praveen.info();
// const john = new Person("John", 19, "Male");
// john.info();

// Challenge - 2
// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally, you will define two methods, start and stop, to simulate starting and stopping the car.
// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages display the correct make and model of the cars.
// answer
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.start = function () {
//     console.log(`Starting the ${this.make} ${this.model}...`);
//   };
//   this.stop = function () {
//     console.log(`Stopping the ${this.make} ${this.model}.`);
//   };
// }
// const car1 = new Car("Toyato", "Camry", 2020, "Black");
// car1.start();
// const car2 = new Car("Honda", "CR-V", 2016, "Red");
// car2.stop();

// BUILT-IN CONSTRUCTORS

const num1 = new Number(10);
const num2 = 10;
console.log(num1);
console.log(typeof num1); // object
console.log(typeof num2); // number

const str1 = new String("Praveen");
console.log(str1);
console.log(typeof str1); // object

const bool1 = new Boolean(false);
console.log(bool1);
console.log(typeof bool1); // object

const arr1 = new Array(1, 2, 3);
console.log(arr1);
console.log(typeof arr1); // object
