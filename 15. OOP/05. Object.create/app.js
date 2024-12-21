let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};
const praveen = Object.create(person);
praveen.firstName = "Praveen";
praveen.lastName = "Kumar";
praveen.greet();

const john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});
john.greet();

