console.log("External Jaavscript");
// Konsol etdiyimiz emeliyyatlara nezaret, errorlara ve neticeye baxmaq ucun istifade edeceyimiz hissedir

// alert('Hello')
// Bildiris meqsedile istifadeciye gonderilen melumat

// prompt('What is your name')
// Istifadeciden cavab almaq meqsedile gonderilen bildiris

// Data types

// Primitive, besit yada sade

// String

let color = "Red";
let name = "Narmin";
let surname = "Mammadova";

console.log(surname + " " + name);

// Number

let age = 22;
let price = 34.6;
console.log(40 + 34);
let a = 13;
let b = 45;
console.log(a + b);

// Boolean

let mistake = false;
let correct = true;

// Non-primitive, murekkeb

// Object type

let myInfo = {
  age: 24,
  name: "Narmin",
  city: "Baku",
};

console.log(myInfo);
console.log("My city is:" + myInfo.city);
console.log(myInfo.age);
console.log(myInfo.name);

// Array type

let customers = ["Narmin", 23, true, "Sema"];
console.log(customers);

console.log(customers[0]);
console.log(customers[1]);
console.log("Arrayin 2 ci indeksinde duran elemnt:" + customers[2]);
console.log(customers[3]);

// Qayda arrayin ilk elementinin indexi hemise 0 dir ve 0 dan basliyir


// Xususi yada trivial type


// Null type

let myMoney = null;
console.log(myMoney);

// Undefined

let myWord;
console.log(myWord);
