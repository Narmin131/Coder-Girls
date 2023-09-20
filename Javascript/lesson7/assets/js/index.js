// Functions

// 1.Function declarations

function getName() {
  console.log("Salam");
}

getName();

function sumNumber(a, b) {
  console.log(a + b);
}

sumNumber(4, 8);
sumNumber(12, 56);

// *************************************

// let age = Number(prompt("Enter your age"));

// function personPermisson() {
//   if (age > 18) {
//     console.log("Masin sure bilersen");
//   } else {
//     console.log("Masin sure bilmezsen");
//   }
// }

// personPermisson()

// **************************************

// function chooseCountry(country) {
//   if (country == "Turkey") {
//     console.log("You are turkish");
//   } else {
//     console.log("You are not turkish");
//   }
// }

// chooseCountry("Moscow");

// **************************************

function reqemlerinHasili(num1, num2) {
  return num1 * num2;
  // console.log(num1 * num2);
}

let yekunHasil = reqemlerinHasili(12, 5);
console.log(yekunHasil);

// 2.Function expression

let myInfo = function () {
  console.log("Salam Nermin");
};

console.log(myInfo);

// 3. Arrow functions

// ES6 - oxlu funksiya

const myFunction = () => {
  console.log("Arrow function");
};

myFunction();

const reqemlerinCemi = a => console.log(a);

reqemlerinCemi(12);
