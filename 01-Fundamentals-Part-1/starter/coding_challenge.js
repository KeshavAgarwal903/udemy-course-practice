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

if(markBMI > johnBMI){
  console.log(`Marks BMi (${markBMI}) is higher than Johns (${johnBMI})!`)
} else {
  console.log(`Johns BMI (${johnBMI}) is higher than Marks(${markBMI})!`)
}