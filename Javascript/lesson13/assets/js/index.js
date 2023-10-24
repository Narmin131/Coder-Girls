const form = document.querySelector("form");
const input = document.querySelector("input");
const tbody = document.querySelector("tbody");

const todoItems = localStorage.getItem("Todos");
const todos = todoItems ? JSON.parse(todoItems) : [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  if (input.value == "") {
    alert("please fill all the places");
  } else {
    let inputValue = input.value;
    // console.log(inputValue);
    todos.push(inputValue);
    localStorage.setItem("Todos", JSON.stringify(todos));
    // console.log(todoItems);
    location.reload();
  }
});

todos.map((todo, index) => {
  tbody.innerHTML += `
      <tr>
          <td>${index}</td>
          <td>${todo}</td>
          <td><button onclick='deleteTodo(${index})'>delete todo</button></td>
      </tr>
    `;
});

// CRUD App- create, read, update, delete
// yarat, oxu, yenile yada deyisdir, sil

const deleteTodo = (silmekIstediyimTodonunIndexi) => {
  let filteredArray = todos.filter((todo, index) => {
    return index !== silmekIstediyimTodonunIndexi;
  });
  localStorage.setItem("Todos", JSON.stringify(filteredArray));
  location.reload();
};
