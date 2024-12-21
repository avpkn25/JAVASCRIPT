// // Class Declaration
// class Person {
//   constructor(firstName, lastName, age) {
//     // Instance Members
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.printUserInfo = function () {
//       return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
//     };
//   }

//   // Prototype Members
//   greet() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

// class Programmer extends Person {
//   constructor(firstName, lastName, age, pl, exp) {
//     super(firstName, lastName, age);
//     this.pl = pl;
//     this.exp = exp;
//   }
// }

// const praveen = new Person("Praveen", "Kumar", 20);
// console.log(praveen);
// console.log(praveen.printUserInfo());

// const john = new Programmer("John", "Doe", 19, "JavaScript", 5)
// console.log(john);

// Challenge - 1
// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

// answer
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `${this.name} - ${this.level}`;
  }
}
const prabhas = new Hero("Prabhas", "Pan-Indian")
console.log(prabhas.greet());

class Mega extends Hero {
    constructor(name, level, spell) {
        super(name, level)
        this.spell = spell
    }
}
const m1 = new Mega("Mega", "Senior", "Comedy")
console.log(m1.greet());