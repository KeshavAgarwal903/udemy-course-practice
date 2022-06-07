//VALUE AND VARIABLES

// let country = 'India , America , Canada';

// let continent = 'Asia , USA , Europe';

// let polulation = '130 million , NIL , NIL';

// console.log(country , continent , polulation); 
 
// //The Second Method 

// let countryDetails = {
//   country: 'India , America , Canada',

//   continent: 'Asia , USA , Europe',

//   population: '130 million , NIL , NIL',
// };

// console.log(countryDetails); 

// DATA TYPES

// let nation = 'India'; // use according to your nation
// let isIsland = false;
// let population = 130 ;

// console.log(typeof nation , typeof isIsland , typeof population , typeof language);


//LET , CONST AND VAR

// let language = "Hindi";

//The value of the nation and isIsland will be const and never change

// const  country = 'India'; 
// const isIsland = false;

// console.log(population);

// BASIC OPERATORS

// let populationIndia = 130 ;
// console.log(populationIndia/2);

// populationIndia = 131;
// console.log(populationIndia);

// let populationFinland = 6;
// console.log(populationIndia > populationFinland);

// let avgPopulation = 33;
// console.log(populationIndia < avgPopulation);


//  Taking Decisions: if / else Statements

// let indiaPopulation = 130;
// let portugalPopulation = 120;

// if(indiaPopulation > 33){
//   console.log(`Portugal's population is above average`)
// } else {
//   console.log(`Portugal's population is 22 million below average`)
// }

// Type Conversion and Coercion

// 1. 4
// 2. 617
// 3. 617
// 4. 
// 5. 5643

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

//  Equality Operators: == vs. ===

// const numNeighbours = Number( prompt(`'How many neighbour countries does your country 
// have?`));
// console.log(typeof numNeighbours);

// if(numNeighbours === 1){
//   console.log(`Only 1 border!`)
// } else if (numNeighbours > 1){
//   console.log(`More than 1 border`)
// }else{
//   console.log(`No borders!`)
// }

// we should strict operatoe because loose operator will create many unexepected bugs into the codes !!

// Logical Operators

// const language = `hindi`;
// const population = 30;
// const isIsland = false;

// if(language === `english` && population < 50 && isIsland === false){
//   console.log(`You should live in Portugal :)`);
// }else {
//   console.log(`Portugal does not meet your criteria :(`);
// }

// //  The switch Statement

// switch(language){
//   case `chinese`:
//   case `mandarin`:
//     console.log(`MOST number of native speakers!`);
//     break;
  
//   case `spanish`:
//     console.log(`2nd place in number of native speakers`);
//     break;
   
//   case `english`:
//     console.log(`3rd place`);
//     break;

//   case `hindi`:
//     console.log(`Number 4`);
//     break;

//   case `arabic`:
//     console.log(`5th most spoken language`);
//     break;

//   default:
//     console.log(`Great language too :D`)
// }

// // The Conditional (Ternary) Operator

// const population1 = 130;

// population1 > 33 ? console.log(`Portugal's population is above average`) : console.log(`Portugal's population is below average`)