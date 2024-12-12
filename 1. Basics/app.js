// alert("hello Praveen") // to see the message as alert
// console.log("Hello world"); // to print the message in the web console
// console.warn("this is a warning") // to print the message in the web console as warning
// console.error("this is a error") // to print the message in the web console as error
// console.table({ name: "praveen", age: 20 }); // to print the object as table wise in the console
// console.clear(); // to clear out the screen
//console.log();

// // decleration of variable
// let name;

// // assign value to the variable
// name = "praveen";

// console.log(name);

// let praveen = "praveen";
// console.log(praveen);

// challenge - 1
// 1. Create variable name (name) & store your name.
// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & Store "programmer"
// 3. Create variable name (gender) & Store your gender.
// 4. Create variable name (twitterHandle) & store your twitter handle.
// 5. Finally log all variables to the console.
// answer
// let name = "praveen";
// let whatDoYouWannaBecomeInYourLife = "programmer";
// let gender = "male";
// let twitterHandle = "AVPKN_25";
// console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);

// variables

// let num = -10000.1;
// console.log(typeof num);  prints the type of that variable

// basic maths
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

// let counter = 0;
// counter++;
// console.log(counter);
// let counter = 10;
// counter--;
// console.log(counter);

// Challenge - 2
// 1. Create Variable name (firstFavNum) & Store your favorite number.
// 2. Create Variable name (secondFavNum) & Store your second fav number.
// 3. Add (firstFavNum & secondFavNum).
// 4. Subtract (firstFavNum & secondFavNum).
// 5. Multiply (firstFavNum & secondFavNum).
// 6. Divided (firstFavNum & secondFavNum).
// 7. Check (firstFavNum Mod secondFavNum).
// 8. Check the power of (firstFavNum)
// answer
// let firstFavNum = 9
// let secondFavNum = 7
// console.log(firstFavNum+secondFavNum);
// console.log(firstFavNum-secondFavNum);
// console.log(firstFavNum*secondFavNum);
// console.log(firstFavNum/secondFavNum);
// console.log(firstFavNum%secondFavNum);
// console.log(firstFavNum**secondFavNum);

// let isTrue = true; // on or off
// console.log(isTrue);

// let num = 10;
// console.log(num+undefined);

// let notDefined = undefined;
// console.log(notDefined);

// Challenge - 3
// 1. Create Variable name (isJsProgrammingLanguage) & store true as a value.
// 2. Create Variable name (isJSHard) & store false as a value.
// 3. Create Variable name (favNumb) & store your favorite number inside.
// 4. Now Add favNumber with the value of undefined.
// answer
// let isJsProgrammingLanguage = true;
// let isJSHard = false;
// let favNumb = 9;
// console.log(isJsProgrammingLanguage);
// console.log(isJSHard);
// console.log(favNumb);
// console.log(favNumb + undefined);

// Relational Operators
// console.log(10 + 10); // 20
// console.log(10 > 10); // false
// console.log(10 < 10); // false
// console.log(10 >= 10); // true
// console.log(10 <= 10); // true

// equality operators
// console.log(10 === 10); // true
// console.log(10 === "10"); // false because of type
// console.log(10 === 20); // false
// console.log(10 !== 10); // false
// console.log(10 !== '10'); // true
// console.log(10 == 10); // true
// console.log(10 == '10'); // true
// console.log(10 == '20'); // false
// console.log(10 != 10); // false
// console.log(10 != 20); // true
// console.log(10 != "20"); // true

// Challenge - 4
// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (SecondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater than secondFavNumb).
// 4. Check (firstFavNumb is less than secondFavNumb).
// 5. Check (firstFavNumb is greater than & equal to secondFavNumb).
// 6. Check (firstFavNumb is less than & equal to secondFavNumb).
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.
// answer
// let firstFavNumb = 9;
// let secondFavNumb = 7;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb !== secondFavNumb);
// console.log(firstFavNumb != secondFavNumb);

// Strings
// let firstName = `Praveen`;
// let secondName = "Kumar";
// let fullName = firstName + secondName;
// console.log(fullName);
// 1. concatenation
//let fullName = firstName.concat(secondName);
// console.log(fullName);
// 2. appending
// firstName += secondName
// console.log(firstName);
// 3. length
// console.log(firstName.length); // length of firstname
// 4. cases
// console.log(firstName.toLowerCase());
// console.log(secondName.toUpperCase());
// 5. Slicing
// console.log(firstName.slice(1,5)); // rave
// 6. Split & Join
// console.log(firstName.split("").join("-"));
// 7. Includes
// console.log(firstName.includes("P")); // case sensitive
// 8. Trim
// let newname = '            chiro           '
// console.log(newname.trim());

// use of ``
// let desc = `this is a
// random Text
// `
// console.log(desc)
// let firstName = 'Praveen'
// let lastName = 'Kumar'
// let fullName = `${firstName} ${lastName} Naidu`;
// console.log(fullName);

// Challenge - 5
// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store your last name of (FA).
// 3. Create variable name (fullName) & Concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav Actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) 'his best show is Silicon Valley'.
// 7. Now Log your Message
// answer
// let favActorFirstName = "Johnny";
// let favActorLastName = "Depp";
// let fullName = favActorFirstName + " " + favActorLastName;
// let UPPERCASE = fullName.toUpperCase();
// let message = `My favorite Actor Is ${UPPERCASE} & He is Super actor.`;
// message += " his best show is pirates of caribbean.";
// console.log(message);

// Type Conversions
// String ---> number
// let money = "50";
// console.log(money + " " + typeof money);
// money = parseInt(money);
// console.log(money + " " + typeof money);
// money = +money;
// console.log(money + " " + typeof money);
// money = Number(money);
// console.log(money + " " + typeof money);
// Number ---> String
// let money = 50;
// console.log(money + " " + typeof money);
// money = money.toString();
// console.log(money + " " + typeof money);
// money = String(money);
// console.log(money + " " + typeof money);
// String ---> Decimal
// let money = "50.245";
// console.log(money + " " + typeof money);
// money = parseFloat(money);
// console.log(money + " " + typeof money);
