'use stirct';

//CODING CHALLENGE 1

// const averageDolphins = (85+54+41)/3;
// const averageKoalas = (23+34+27)/3;

// function checkWinner(avgDolphins , avgKoalas){
//   if(avgDolphins >= 2*avgKoalas){
//     console.log(`Dolphin wins (${averageDolphins} vs ${averageKoalas})`)
//   }else if(avgKoalas >= 2*avgDolphins){
//     console.log(`Koalas wins (${averageKoalas} vs ${averageDolphins})`)
//   }else{
//     console.log(`No team wins the match :(`)
//   }
// }

// console.log(checkWinner(averageDolphins , averageKoalas));

//CODING CHALLENGES #2

// function calcTip(billAmount){
//   if(billAmount >= 50 && billAmount <= 300){
//     const tipAmount = (15/100)*billAmount
//     console.log(tipAmount);
//   }else{
//     const tipAmount1 = (20/100)*billAmount
//     console.log(tipAmount1);
//   }
// } 
// const bills = [125 , 555 , 44];
// const tips = [tipAmount , tipAmount];
// const total = [bills + tipAmount && bills + tipAmount1];


// calcTip(bills[0]);
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));

// console.log(bills , tips , total);

// Coding challenge #3

console.log(`Let's learn some JavaScript ;)`);

const objMark = {
  fullName:  `Mark Miller`,
  mass: 78,
  height: 1.69,

  calcBMIMark : function(this) {
    return (this.massmass / height) ** 2
  }
}

const objJohn = {
  fullName:  `John Smith`,
  mass: 92,
  height: 1.95,

  calcBMIJohn : function(mass , height){
    return (mass / height) ** 2
  }
}

console.log(objJohn.calcBMIJohn , objMark.calcBMIMark);
