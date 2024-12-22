// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 == 0) {
//       resolve(`${number} is an even number.`);
//     } else {
//       reject(`${number} is an odd number.`);
//     }
//   });
// }

// const numberToCheck = 7; // odd
// checkNumber(numberToCheck)
//   .then((message) => {
//     console.log(`Success: ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Fail: ${error}`);
//   });

// PREVIOUS SECTION CODE
// function callBackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside (callbackHell) function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }
// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed First`;
//     console.log(`Inside (firstFunc) Function`);
//     callback(processedData);
//   }, 1000);
// }
// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed Second`;
//     console.log(`Inside (secondFunc) Function`);
//     callback(processedData);
//   }, 1500);
// }
// // Callback Hell
// callBackHell((data) => {
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) => {
//             console.log(`Final result of all functions: ${processedData2}`);
//         })
//     })
// })

// function callBackHell() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside (callbackHell) function";
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }
// function firstFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed`;
//       console.log("Inside (firstFunc) Function");
//       resolve(processedData);
//     }, 2000);
//   });
// }
// function secondFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed`;
//       console.log("Inside (secondFunc) Function");
//       resolve(processedData);
//     }, 1500);
//   });
// }

// callBackHell()
//   .then((data) => firstFunc(data))
//   .then((processedData1) => secondFunc(processedData1))
//   .then((processedData2) =>
//     console.log(`Final result of all functions: ${processedData2}`)
//   )
//   .catch((error) => console.log(`Error: ${error}`));

// Challenge - 1
// Refactor this code
// console.log("Start");
// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log(`Getting User Name`);
//     callback(name);
//   }, 2000);
// }
// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log(`Getting User Hobbies`);
//     callback(["cricket", "football"]);
//   }, 2000);
// }
// getUserDataFromDB("Praveen", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });
// console.log("End");

// answer
console.log("Start");
function getUserDataFromDB(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Valid User Name`);
      resolve(name);
    }, 2000);
  });
}
function getUserHobbies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Getting User Hobbies`);
      resolve(["Cricket", "Football"]);
    }, 2000);
  });
}
getUserDataFromDB("Praveen")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((error) => console.log(error));
console.log("End");
