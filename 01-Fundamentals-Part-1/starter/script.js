// VALUES AND VARIABLES

// let name_my = "Keshav" ;
// console.log(name_my); 

// DATA TYPES

// let javascriptIsFun = true ;

// javascriptIsFun = "YES!" 

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

//LET , CONST AND VAR

// const birthYear = 2006;
// console.log(typeof birthYear)
// birthYear = 2005;

// BASIC OPERATORS
// MATHEMATICAL OPERATORS

// const yearNow = 2025;

// const ageRandom = yearNow - 2006;
// const ageKeshav = yearNow - 2005;

// console.log(ageKeshav , ageRandom);

// console.log(2**3 , ageKeshav * 2 , ageRandom / 10 );

// 2**3 means 2 power 3 = 2*2*2 :)

//use of plus(+) operator

// const firstName = "Keshav";
// const lastName = "Agarwal";

// console.log(firstName + lastName);


//If we want space between two letters
// console.log(firstName + ' ' + lastName);

//ASSIGNMENTS OPPERATORS

// "+="
// Ex - x += 10; // x = x+10

// "*="
// Ex - x *= 4; // x = x*4

// "++"
// Ex - x++; // x = x+1

// "--"
// Ex - x--; // x = x-1 

// COMPARISON OPERATORS

// It is basically a Boolean value and the result is in true or false.
//  This Includes > , < , ≥ , ≤ .


// Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2025;

//Old Method

// const jonas = "I'm " + firstName + " , a " + (year - birthYear) + ' year old ' + job + ' !';
// console.log(jonas)

// TEMPLATE STRING METHOD

// const jonasNew = `I'm ${firstName} , a ${year-birthYear} years old ${job} !`;
// console.log(jonasNew);

//MULtiple Line regular string

// console.log('string 1 \n\
// string 2\n\
// string 3');

//MULtiple Line template string

// console.log(`string 1 
// string 2
// string 3`);

// Taking Decisions: if / else Statements

// const age = 17;
// const isOldEnough = age >= 18;

// if(age >= 18){
//   console.log('Keshav can get a driving license' )
// } else{
//   const yearsLeft = 18 - age;
//   console.log(`Wait  for ${yearsLeft} year :)`)
// }

// const birthYear = 1995;
// let century;

// if(birthYear <= 2000){
//   century = 20;
// }else {
//   century = 21;
// };
// console.log(century);


// Type Conversion 

// const inputYear = '1991'
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// const firstName = 'Keshav';
// console.log(Number(firstName));

// // OutPut = NaN (Not a Number)

// console.log(typeof NaN);

// Type Coercion

// console.log('I am ' + 23 + ' years old');

//Truthy and Falsy Values(Boolean)
// 5 falsy values : 0, '' , undefined , null , NaN

// Type coertion in if/else statement 

// const money = 10;

// if(money){
//   console.log(`Don't spend it all !`)
// }else{
//   console.log(`Get a job and save some money !`)
// }

// It is also used to check if any variable is defined or not 

// let height;
// if(height){
//   console.log(`YAY! height is defined`)
// }else{
//   console.log(`Shit , height is not defined`)
// }

// Equality Operators: == vs. ===

// console.log('18' == 18); // loose
// console.log('18' === 18); // strict

// const fav = Number(prompt(`Whats your fav number ??`));
// console.log(fav);
// console.log(typeof fav);

// if(fav === 23){
//   console.log(`Cool! 23 is an amazng number`)
// }

// Boolean Logic and Logical Operators


// Taking decisions with Boolean Logic




// const hasDiversLicense = true; //A
// const hasGoodVision = true; //B
// const isTired = true; //C

// A
// console.log(hasDiversLicense &&  hasGoodVision);

// console.log(hasDiversLicense || hasGoodVision);

// console.log(!hasDiversLicense);

// B
// console.log(hasDiversLicense && hasGoodVision && isTired);

// C
// if(hasDiversLicense && hasGoodVision && !isTired){
//   console.log(`Sarah can drive really well !!`)
// }else{
//   console.log(`Sarah should take rest !`)
// }


//  The switch Statement

// const day = `Monday`;

// switch(day){
//   case 'Monday': // day === 'Monday'
//    console.log(`Plan the course`);
//    console.log(`Go to the gym !`);
//    break;
//   case 'Tuesday': // day === 'Tuesday'
//     console.log(`Go to a date`);
//     console.log(`Virtual meetup with friends ;)`);
//     break;
//   case 'Wednesday':
//   case 'Thursday':
//     console.log(`Solve the queries and doubts !`); // This will be executed for both wednesday and thursday !
//     break;
//   case 'Friday':
//     console.log(`Record videos and solve bugs`);
//     break;
//   case 'Saturday':
//   case 'Sunday':
//     console.log(`Chill with friends and family :)`);
//     break;
//   default:
    // executed when all the above cases are false 
//     console.log(`Not a valid day!`);
// }

// The switch statement converted into if/else statement :)

// if(day === `Monday`){
//   console.log(`Plan the course & go to the gym`);
// }else if(day === `Tuesday`){
//   console.log(`Go to a date & virtual meetup wit friends`);
// }else if (day === `Wedneday` || day === `Thursday`){
//   console.log(
//     `write code examples`
//   );
// }else if (day === `Friday`){
//   console.log(`Record videos and solve bugs`);
// }else if(day === `Saturday` ||day === `Sunday`){
//   console.log(`Enjoy the weekend`);
// }else{
//   console.log(`Not a valid day`);
// }


// Statements and Expressions

// The Conditional (Ternary) Operator


// age >= 18 // This the condition 
// ? console.log(`I like to drink wine 🍷`)// This is the code that will be executed if the given condition is true 
// : console.log(`I like to drink water 🥛`); // this is the else block 

// const drink =  age >= 18 ? `wine` : `water`;

// console.log(drink);
// const age = 23;

// console.log(`I like to drink ${ age >= 18 ? `wine` : `water`}`)
