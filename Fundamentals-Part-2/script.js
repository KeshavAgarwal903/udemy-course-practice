'use strict';

// FUNCTIONS

// function logger(){
//   console.log(`My name is JavaScript:)`)
// }

// calling / running / invoking function
// logger();
// logger();
// logger();


// A function can input the data , run the code and return the output

//Functions as a machine

// function fruitProcessor(apples , oranges){
//   console.log(apples , oranges);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges :D`;

//   return juice // Use to return any value from a function
// }

// Running the function fruitProcessor

// fruitProcessor(5 , 0);// These are the input of the parameters called arguments i.e., apples and oranges !!

//IF WE WANT TO USE THE VALUE THAT IS RETURNED WE NEED TO STORE IT INTO A VARAIBLE

// const appleJuice = fruitProcessor(5 , 0);
// console.log(appleJuice);

// WE CAN ALSO WRITE 
// console.log(fruitProcessor(5 , 0));

//WE CAN USE FUNCTIONS WITH DIFFERENT VALUES AS MANY TIMES WE WANT

// const appleOrangeJuice = fruitProcessor(12 , 6);
// console.log(appleOrangeJuice);

//FUNCTION DECLARATION
// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991)

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthYear){
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1 , age2);

// ARROW FUNCTION

// const calcAge = birthYear => 2037 - birthYear;

// const age = calcAge(1991);
// console.log(age);


// const yearsUntilRetirement = birthYear => {
//   const age = 2017 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }

// console.log(yearsUntilRetirement(1991));

// FUNCTIONS CALLING OTHER FUNCTIONS

//* LETS ASSUME THAT THE FRUIT PROCESSOR CAN ONLY PROCESS FOOD WITH SMALLER PIECES

// const cutPieces = function (fruit){
//   return fruit * 4;
// }

// const fruitProcessor = function (apples , oranges){
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//   return juice;
// }
// console.log(fruitProcessor(1,1));

// INTRODUCTION TO ARRAYS

// Variables
// const friends1 = `michael`;
// const friends2 = `steven`;
// const friends3 = `peter`;

//ARRAY METHOD

// const friends = ['michael' , 'steven' , 'peter'];
// console.log(friends);

//DIFFERENT WAY OF CREATING ARRAY
// const year = new Array(1991 , 2000 , 2022 , 2037);
// console.log(year);

//CALLING AN ARRAY
// console.log(friends[0]);//Since array starts from "0"
// console.log(friends[2]);

//TO GET THE NO. OF ELEMENTS PRESENT IN THE ARRAY
// console.log(friends.length);

//WE CAN ALSO GET THE LAST ELEMENT OF THE ARRAY IN THE FOLLOWING WAY
// console.log(friends[friends.length - 1]);

//MANIPULATING THE DATA IN A ARRAY
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = `Keshav`;
// const jonas = [firstName , 'Agarwal' , 2037-2022 , 'student' , friends];
// console.log(jonas); 

// Basic Array Operations (Methods)

// const friends = ['michael' , 'steven' , 'peter'];

// //*ADDS ELEMENTS

// //PUSH - Adds a new element at the end of the array 
// friends.push('jay');
// console.log(friends); 

// //UNSHIFT - Adds an element to the front of an array 

// friends.unshift(`Michael`);
// console.log(friends);

// //* DELETE ELEMENTS

// //POP - Remove the last element of the array !

// friends.pop(); // No arguments required
// console.log(friends);
// // Can be used multiple times to remove the preceding last element

// //SHIFT - Remove the first element fron an array

// friends.shift();
// console.log(friends)

// // indexOf - We can find the position of the element from an array

// console.log(friends.indexOf(`michael`));

// // includes - To check if an element is present in the array !

// console.log(friends.includes(`steven`));//true
// console.log(friends.includes(`bob`));//false

//* Introduction to Objects

// const Keshav = {
//   firstName: `Keshav`,
//   lastName: `Agarwal`,
//   age: 2037-2006,
//   job: `Programmer` 
// }

// Retrieving and changing the data in Objects(dot v/s bracket notation)


const Keshav = {
  firstName: `Keshav`,
  lastName: `Agarwal`,
  age: 2037-2006,
  job: `Programmer`,
  friends: ['Michael' , 'Steve' , 'Bob']
}

console.log(Keshav)

console.log(`${Keshav.firstName} has ${Keshav.friends.length} friends and his best friend is calles ${Keshav.friends[0]} ;)`);

// Retreving data from onject with property name :- 

// Dot Notation
console.log(Keshav.lastName);

// Bracket Notation
console.log(Keshav[`lastName`]);

// The differrence in both is that we can enter any type of expression in the square brackets !!

// Using an expression

const nameKey = `Name`;
console.log(Keshav['first' + nameKey]);
console.log(Keshav['last' + nameKey]);

// We can only use dot notation with the properties are already defined. 

// const interestedIn = prompt(`What do you want to know about Jonas choose from firstName , lastName , job , age`);

// console.log(Keshav[interestedIn]);

// if(!Keshav[interestedIn]){
//   console.log(`Your request cannot be rendered from the server , please select from the given options !!`)
// }

// Adding value in the objects

Keshav.location = `India `;
Keshav[`twitter`] = `@keshav_903`;

console.log(Keshav);