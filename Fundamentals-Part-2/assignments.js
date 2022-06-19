'use stirct';
// FUNCTIONS

// function describeCountry(country , population , capitalCity){

//   return `${country} has ${population} million people and it capital city is ${capitalCity}`;
// }

// const finland = describeCountry(`finland` , 6 , `Helsinki`);
// console.log(finland);

// FUNCTION DECLARATION VS EXPRESSION

// function percentageOfWorld1(population){
//   return (population/7900)*100
// };

// console.log(percentageOfWorld1(1300)); 
// console.log(percentageOfWorld1(1400)); 
// console.log(percentageOfWorld1(1000));

// const percentageOfWorld2 = function(population1){
//   return (population1/7900)*100
// }

// console.log(percentageOfWorld2(1300));
// console.log(percentageOfWorld2(1400));
// console.log(percentageOfWorld2(1000));

// // ARROW FUNCTIONS

// const percentageOfWorld3 = population3 => (population2/7900)*100;

// console.log(percentageOfWorld3(1300));
// console.log(percentageOfWorld3(1400));
// console.log(percentageOfWorld3(1000));

//FUNCTIONS CALLING OTHER FUNCTIONS


// function percentageOfWorld1(population1){
//   return (population1/7900)*100
// };

// function describePopulation(country , population){
//   const percentageOfWorld = percentageOfWorld1(population);

//   const describe = `${country} has ${population} million people , which is about ${percentageOfWorld1} % of the world`

//   return describe;
// }

// console.log(describePopulation(`china` , 1441));

// Introduction to Arrays

// const populations = [130 , 150 , 80 , 15];

// const percentageOfWorld2 = function(population1){
//   return (population1/7900)*100
// }

// Basic Array Operations (Methods)

const neighbours = [`China` , `Pakistan` , `Sri lanka`, `Sweden`];

neighbours.push(`Utopia`);
console.log(neighbours)

neighbours.pop();
console.log(neighbours);

if(neighbours.includes(`Germany`)){
  console.log(`Its a central European country :/`)
}else{
  console.log(`Probably not a central European country :D`)
}

const change = neighbours.indexOf(`Sweden`);

if (change !== 0){
  neighbours[change] = `Republic of Sweden`;
};

console.log(neighbours);