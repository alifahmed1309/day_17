// let bdt = document.querySelector('.bdt');
// let usdUser = document.querySelector('.usd');
// let usd = Number(prompt('Enter Amount of USD'));

// usdUser.innerHTML = usd;

// usd = usd*122;

// bdt.innerHTML = usd;







// let result = Number(prompt('Enter the Number'));

// if (result>=80 && result<=100){
//     console.log("A+")
// }else if (result>=70 && result<=79){
//     console.log("B")
// }else if (result>=60 && result<=69){
//     console.log("A")
// }else if (result>=50 && result<=59){
//     console.log("B")
// }else if (result>=40 && result<=49){
//     console.log("C")
// }if (result>=0 && result<=39){
//     console.log("F")
// }








let firstUser = document.querySelector('.domone');
let secondUser = document.querySelector('.domtwo');
let ab = document.querySelector('.ab');


let a = Number(prompt('Enter a value of a'));
let b = Number(prompt('Enter a value of b'));

firstUser.innerHTML = a;
secondUser.innerHTML = b;

rule = (a*a)+2*(a*b)+(b*b);

ab.innerHTML = rule;
