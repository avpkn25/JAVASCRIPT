// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data retrived from the server.");
//     }, 4000);
//   });
// }
// async function getUserData() {
//   try {
//     const data = await fetchDataFromServer();
//     console.log(data);
//     console.log("Remaining tasks can be executed here.");
//   } catch (e) {
//     console.log(e);
//   }
// }
// getUserData();

// REFACTOR PREVIOUS CODE
// function callbackHell() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = `Inside (CallbackHell) function`;
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }

// function firstFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed First.`;
//       console.log("Inside (firstFunc) Function");
//       resolve(processedData);
//     }, 1500);
//   });
// }
// function secondFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed Second.`;
//       console.log(`Inside (secondFunc) Function`);
//       resolve(processedData);
//     }, 1000);
//   });
// }

// async function processedDataWithAsyncAwait() {
//   try {
//     const data = await callbackHell();
//     const processedData1 = await firstFunc(data);
//     const processedData2 = await secondFunc(processedData1);
//     console.log(`Final: ${processedData2}`);
//   } catch (error) {
//     console.log(error);
//   }
// }
// processedDataWithAsyncAwait();

// Challenge - 1
// console.log("Start");
// function getUserDataFromDB(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Valid User Name`);
//       resolve(name);
//     }, 2000);
//   });
// }
// function getUserHobbies() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Getting User Hobbies`);
//       resolve(["Cricket", "Football"]);
//     }, 2000);
//   });
// }
// getUserDataFromDB("Praveen")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((error) => console.log(error));
// console.log("End");

// answer
console.log("Start");
function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
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
async function FetchData(name) {
  try {
    const data = await getUserDataFromDB(name);
    const hobby = await getUserHobbies();
    console.log(hobby);
  } catch (error) {
    console.log(error);
  }
}
FetchData("Praveen");
console.log("End");