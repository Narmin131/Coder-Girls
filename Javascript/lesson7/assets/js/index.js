// Functions

// 1.Function declarations

// ES5
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

myInfo();

// 3. Arrow functions

// ES6 - oxlu funksiya

const myFunction = () => {
  console.log("Arrow function");
};

myFunction();

const reqemlerinCemi = (a) => console.log(a);

reqemlerinCemi(12);

// 4. IIFE function - Immediately Invoked Functions Expression

// ES5 ile yazilis
(function () {
  console.log("This is IIFE function");
})();

// ES6 ile yazilis

((name, job) => {
  console.log(`My name is ${name} and my job is ${job}`);
})("Esma", "Teacher");

let number = 12;

let message = ((value) => {
  return `My number is ${value}`;
})(number);

let a = message;
console.log(a);

// 5. HOC functions - High Order Functions

let function1 = function () {
  console.log("Hello World");
};

let function2 = function (parametrFunction) {
  parametrFunction();
};

function2(function1);

// 6. Constructor functions
// 7. Generator functions
// 8. Callback functions
