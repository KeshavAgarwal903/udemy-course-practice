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

let indiaPopulation = 130;
let portugalPopulation = 120;

if(indiaPopulation > 33){
  console.log(`Portugal's population is above average`)
} else {
  console.log(`Portugal's population is 22 million below average`)
}

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

const numNeighbours = Number( prompt(`'How many neighbour countries does your country 
have?`));
console.log(typeof numNeighbours);

if(numNeighbours === 1){
  console.log(`Only 1 border!`)
} else if (numNeighbours > 1){
  console.log(`More than 1 border`)
}else{
  console.log(`No borders!`)
}

// we should strict operatoe because loose operator will create many unexepected bugs into the codes !!