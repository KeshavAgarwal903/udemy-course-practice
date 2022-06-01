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
//   console.log(`Wait for ${yearsLeft} year :)`)
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

const inputYear = '1991'
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

const firstName = 'Keshav';
console.log(Number(firstName));

// OutPut = NaN (Not a Number)

console.log(typeof NaN);

// Type Coercion

console.log('I am ' + 23 + ' years old');