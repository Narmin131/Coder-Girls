// Date methods

// let date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// date.setMonth(0);
// console.log(date.getMonth());

// Array methods

let myArr = [12, 32, 100, 982, 23, 34, 45, 55];
// console.log(myArr);

// let myArr2 = new Array(12, 34);
// console.log(myArr2);

// 1.Push - arrayin sonuna element elave edir

// myArr.push("Salam");
// console.log(myArr);

// 2.Unshift - arrayin basina element elave edir

// myArr.unshift("Sagol");
// console.log(myArr);

// 3.Pop - arrayin sonuncu elementi silir

// myArr.pop()
// console.log(myArr);

// 4.Shift - arrayin ilk elementini silir

// myArr.shift()
// console.log(myArr);

// 5.Length - arrayin uzunlugunu dondurur

// let arrayLength = myArr.length
// console.log(arrayLength);

// 6.toString

// let stringElements = myArr.toString()
// console.log(myArr);
// console.log(stringElements);

// 7.Join

// let myElements = myArr.join(' and ')
// console.log(myArr);
// console.log(myElements);

// 8.Concat

// let arr2 = ['Sema', 13, null]
// console.log(myArr);
// console.log(arr2);
// let twoArraySum = myArr.concat(arr2)
// console.log(twoArraySum);

// 9.Splice

// let splicedArray = myArr.splice(0,3)
// console.log(splicedArray);

// 10.Slice

// let slice = myArr.slice(0,3)
// console.log(slice);

// 11.IndexOf

// let index = myArr.indexOf(34)
// console.log(index);

// 12.Flat

// let array = [1, 4, 23, [34, 56, [22, null]], [34, 678]];
// console.log(array);

// let flat = array.flat()
// console.log(flat);

// 13.Find

// let find = myArr.find(element => element > 40 )
// console.log(find);

// 14.Filter

let products = [
  { title: "Book", price: 34, category: "Paper" },
  { title: "Pencil", price: 56, category: "Wood" },
  { title: "Notepad", price: 87, category: "Paper" },
  { title: "Comp", price: 827, category: "Tech" },
];

// let filter = products.filter((product) => product.category == "Paper");
// console.log(filter);

// let filter2 = myArr.filter((number) => number > 40);
// console.log(filter2);

// 15.findIndex

// let findIndex = products.findIndex((a)=> a.category == 'Tech')
// console.log(findIndex);

// 16.Some

// let some = myArr.some((a) => a % 2 == 0);
// console.log(some);

// 17.Every

// let every = myArr.every((a) => a % 2 == 0);
// console.log(every);

// 18.Reduce

// let reduce = myArr.reduce((total, currentValue) => total += currentValue)
// console.log(reduce);

// 19.Includes

// let includes = myArr.includes(1)
// console.log(includes);

// 20.Sort

// let sort = myArr.sort((a, b)=> a -b)
// let sort2 = myArr.sort((a, b)=> b -a)
// console.log(sort);
// console.log(sort2);

// let names = ['Sarah', 'Esma', 'Nermin', 'Ali']
// console.log(names);
// let sort = names.sort()
// console.log(sort);

// 21. Reverse

// console.log(myArr);
// let reverse = myArr.reverse()
// console.log(reverse);

// 22.Map

// console.log(myArr);

// let map = myArr.map((n)=> n * 2)
// console.log(map);

// 23.forEach

// myArr.forEach((e)=>{
//     console.log(e);
// })

// 24.Delete

// delete myArr[1]
// console.log(myArr);

// DOM

// 1.Accessing elements

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
