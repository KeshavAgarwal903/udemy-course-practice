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

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2025;

//Old Method

const jonas = "I'm " + firstName + " , a " + (year - birthYear) + ' year old ' + job + ' !';
console.log(jonas)

// TEMPLATE STRING METHOD

const jonasNew = `I'm ${firstName} , a ${year-birthYear} years old ${job} !`;
console.log(jonasNew);

//MULtiple Line regular string

console.log('string 1 \n\
string 2\n\
string 3');

//MULtiple Line template string

console.log(`string 1 
string 2
string 3`);