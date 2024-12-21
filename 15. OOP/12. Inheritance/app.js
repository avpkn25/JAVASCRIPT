// // ES5 code
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.makeSound = function () {
//   return "Unknown Sound";
// };

// // Subclass COnstrustor inheriting from Animal
// function Dog(name) {
//   Animal.call(this, name); // call the superclass constructor
// }

// // setup prototype chain from Dog to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype);

// // Method specific to Dog
// Dog.prototype.makeSound = function () {
//   return "Woff!";
// };

// // Creating Instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// // console.log(genericAnimal.name);
// // console.log(genericAnimal.makeSound());

// const dog = new Dog("Buddy")
// console.log(dog.makeSound());

// ------------REFACTOR--------------
// // Superclass
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     return "UNKNOWN SOUND";
//   }
// }

// // subclass
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     return "Woff";
//   }
// }

// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.makeSound());

// const dog = new Dog("buddy");
// console.log(dog.makeSound());
