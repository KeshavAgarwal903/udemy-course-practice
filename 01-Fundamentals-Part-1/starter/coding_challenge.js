// 🚀Coding Challenge Solution #1

let massMark = 78;
let heigthMark = 1.69;

let markBMI = massMark / heigthMark ** 2;
// console.log(markBMI);

let massJohn = 92;
let heightJohn = 1.95;

let johnBMI = massJohn / heightJohn ** 2;
// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//🚀 Coding Challenge Solution #2

// if(markBMI > johnBMI){
//   console.log(`Marks BMi (${markBMI}) is higher than Johns (${johnBMI})!`)
// } else {
//   console.log(`Johns BMI (${johnBMI}) is higher than Marks(${markBMI})!`)
// }

// 🚀 Coding Challenge Solution #3

const dolphinsRound1 = 96;
const dolphinsRound2 = 108;
const dolphinsRound3 = 89;

const avgScoreDolphins = (dolphinsRound1 + dolphinsRound2 + dolphinsRound3) /3
console.log(avgScoreDolphins)


const koalasRound2 = 91;
const koalasRound3 = 110;
const koalasRound1 = 88;

const avgScoreKoalas = (koalasRound1 + koalasRound2 + koalasRound3) /3
console.log(avgScoreKoalas);

if(avgScoreDolphins > avgScoreKoalas){
  console.log(`Dolphins won the match by ${ avgScoreDolphins-avgScoreKoalas} points `)
} else if(avgScoreKoalas > avgScoreDolphins){
  console.log(`Koalas won the match by ${ avgScoreKoalas-avgScoreDolphins} points `)
} else if (avgScoreDolphins === avgScoreKoalas){
  console.log(`There is a tie between the teams ;(`)
}

//BONUS 1

const DolphinsRound1 = 97;
const DolphinsRound2 = 112;
const DolphinsRound3 = 101;

const KoalasRound2 = 109;
const KoalasRound3 = 95;
const KoalasRound1 = 106;

const minimumScore = 100;

if(avgScoreDolphins > avgScoreKoalas , avgScoreDolphins >= 100){
  console.log(`Dolphins won the match by ${ avgScoreDolphins-avgScoreKoalas} points B`)
}else if (avgScoreKoalas > avgScoreDolphins , avgScoreKoalas >= 100){
  console.log(`Koalas won the match by ${ avgScoreKoalas-avgScoreDolphins} points B `)
}else if(avgScoreDolphins === avgScoreKoalas , avgScoreDolphins && avgScoreKoalas && minimumScore){
  console.log(`No team wins the trophy B`)
}