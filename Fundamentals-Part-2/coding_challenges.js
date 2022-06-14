'use stirct';

//CODING CHALLENGE 1

const averageDolphins = (85+54+41)/3;
const averageKoalas = (23+34+27)/3;

function checkWinner(avgDolphins , avgKoalas){
  if(avgDolphins >= 2*avgKoalas){
    console.log(`Dolphin wins (${averageDolphins} vs ${averageKoalas})`)
  }else if(avgKoalas >= 2*avgDolphins){
    console.log(`Koalas wins (${averageKoalas} vs ${averageDolphins})`)
  }else{
    console.log(`No team wins the match :(`)
  }
}

console.log(checkWinner(averageDolphins , averageKoalas));