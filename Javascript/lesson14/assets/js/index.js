// Fetch
// Api - Application Programming Interface
// Promise - pending, resolved, rejected
// JSON - Javascript Object Notation

// fetch("https://jsonplaceholder.typicode.com/users")
//   // ugurlu (resolved)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   // ugursuz (rejected)
//   .catch((error) => console.log(error));

// let url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//   .then((res) => res.json())
//   .then((myData) => console.log(myData))
//   .catch((err) => console.log(err));

// Example 1

let btn = document.querySelector("button");

const getData = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let result = "";
      data.products.forEach((element) => {
        result += `
    <div class="card" style="width: 18rem;">
        <img src=${element.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
            `;
      });
      document.querySelector("section").innerHTML = result;
    });
};

btn.addEventListener("click", getData);

// Example 2

function getUsers() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getUsers();


// Asycn/Await, Callback, 