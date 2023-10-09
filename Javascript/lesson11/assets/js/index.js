// Dom events

const myAlert = () => {
  alert("Salam");
};

const myMessage = () => {
  alert("You have been seelcted");
};

let myButton = document.querySelector(".myBtn");

myButton.addEventListener("click", myMessage);

const myLi = document.querySelectorAll("li");

const myFunction = () => {
  myLi.forEach((li) => {
    li.innerHTML = "This is link";
    li.style.color = "red";
  });
};

let myBtn = document.querySelector("#btn");
myBtn.addEventListener("click", myFunction);

// ***************************************
// Menu Open Start

let openBtn = document.querySelector(".open-btn");
let menu = document.querySelector(".menu");

const functionForMenu = () => {
  menu.style.transform = "translateX(0)";
};

openBtn.addEventListener("click", functionForMenu);

// Menu Open End
// ***************************************

// ***************************************
// Menu toggle start
let toggleBtn = document.querySelector(".toggle-btn");

const toggleFunc = () => {
  if (menu.style.transform === "translateX(-100%)") {
    menu.style.transform = "translateX(0)";
  } else {
    menu.style.transform = "translateX(-100%)";
  }
};

toggleBtn.addEventListener("click", toggleFunc);

// Menu toggle end
// ***************************************

// Storage (Session ve LocalStorage)

// 1.SetItem

let word = "Menim adim nermindi";

localStorage.setItem("MyWord", word);
localStorage.setItem("Name", "Nermin");
localStorage.setItem("Age", 22);

// 2.GetItem

console.log(localStorage.getItem("MyWord"));

// 3.RemoveItem

localStorage.removeItem("MyWord");

// 4.Clear

localStorage.clear();

let array = [12, 23, 'salam', true]
let object = {
    name :'Narmin', 
    age:23
}

localStorage.setItem('Array', JSON.stringify(array))

localStorage.setItem('Object', JSON.stringify(object))

console.log(JSON.parse(localStorage.getItem("Array")));
console.log(JSON.parse(localStorage.getItem('Object')));
