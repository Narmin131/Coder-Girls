// Storage - yaddas

// Local vs Session

const modeBtn = document.querySelector(".mode-btn");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enable") {
  enableDarkMode();
}

const changeMode = () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode == "enable") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

modeBtn.addEventListener("click", changeMode);

// ******************************
// HomeWork
// ******************************
let btn = document.querySelector(".txt-btn");
let btn1 = document.querySelector(".get-btn");

const saveToLocal = () => {
  let inputVal = document.querySelector("input").value;
  localStorage.setItem("myMessage", inputVal);
};

const getFromLocal = () => {
  let p = document.querySelector("p");
  p.innerHTML = localStorage.getItem("myMessage");
};

btn.addEventListener("click", saveToLocal);
btn1.addEventListener("click", getFromLocal);

//

let form = document.querySelector("form");
let formBtn = document.querySelector(".form-btn");

const submitForm = (event) => {
  console.log(event);
  event.preventDefault();
  let formInput = document.querySelector(".form-input");
  //   Validation
  if (formInput.value == "") {
    alert("please fill all the places");
  }
  else{
    alert(`Welcome ${formInput.value}`)
  }
};

form.addEventListener("submit", submitForm);

// 