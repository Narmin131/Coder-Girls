// DOM - Document Object Model

// 1.Accessing elements

// Selectors

// let myP = document.getElementsByTagName('p')
// console.log(myP);

// let myForm = document.getElementsByTagName('form')

// let myBtn = document.getElementsByClassName('btn')
// console.log(myBtn);


// let myInput = document.getElementById('inp')


// let myH = document.querySelector('.a')
// let myH = document.querySelector('#b')
// let myH = document.querySelector('h1')

// let myElements = document.querySelectorAll('#b')

// 2.Modifying Elements

let headingElement = document.querySelector('h1')
headingElement.style.color = "red"
headingElement.style.fontSize = "14px"
headingElement.style.border = '2px solid black'
headingElement.style.display = 'inline-block'

// headingElement.innerHTML = 'necesen'
console.log(headingElement.outerHTML);
console.log(headingElement.innerHTML);

let myLi = document.querySelectorAll('li')

myLi.forEach((li)=>{
  li.style.color = 'blue'
})

for(i = 0 ; i < myLi.length ; i++){
    myLi[i].style.color = 'yellow'
}

// Modifying Attributes

let myParagraph = document.querySelector(".p")
console.log(myParagraph.getAttribute('class'));
console.log(myParagraph.getAttribute('id'));
myParagraph.removeAttribute('id')
console.log(myParagraph.hasAttribute('id'));
myParagraph.setAttribute('id', 'salam')



// arrayi dondurmek - foreach , includes