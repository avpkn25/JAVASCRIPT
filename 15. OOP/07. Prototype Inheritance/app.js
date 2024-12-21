function Animal(name) {
  this.name = name;
}
Animal.prototype.sound = function () {
  return "Animal Sound";
};

const animal = new Animal("Frog");
console.log(animal.sound());

function Dog(name, breed) {
  Animal.call(this, name);
  this.name = name;
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Woof!";
};

const dog1 = new Dog("Buddy", "Genus");
console.log(dog1);
console.log(dog1.sound());
console.log(dog1.bark());