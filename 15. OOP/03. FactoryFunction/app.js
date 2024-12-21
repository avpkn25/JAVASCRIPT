// let praveen = {
//   firstName: "Praveen",
//   lastName: "Kumar",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love JavaScript`
//     );
//   },
// };
// let john = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love JavaScript`
//     );
//   },
// };

// function person(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     intro: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
//       );
//     },
//   };
// }

// OR

// function person(firstName, lastName, pl) {
//   return {
//     firstName,
//     lastName,
//     pl,
//     intro: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
//       );
//     },
//   };
// }

// const john = person("john", "doe", "javascript");
// john.intro();
// const praveen = person("praveen", "kumar", "java");
// praveen.intro();

// Challenge - 1
// Create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model and year
// answer
function vehicle(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year,
    detail: function () {
      console.log(
        `${this.type} - ${this.brand} - ${this.model} - ${this.year}`
      );
    },
  };
}

const audi = vehicle("car", "audi", "XXX", 2024);
audi.detail();
