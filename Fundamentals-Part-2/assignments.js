'use stirct';
// FUNCTIONS

function describeCountry(country , population , capitalCity){

  return `${country} has ${population} million people and it capital city is ${capitalCity}`;
}

const finland = describeCountry(`finland` , 6 , `Helsinki`);
console.log(finland);