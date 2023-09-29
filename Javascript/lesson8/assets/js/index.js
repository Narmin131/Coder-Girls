// Date methods

let date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

date.setMonth(0);
console.log(date.getMonth());

// Array methods

let myArr = [12, 23, 34, 45, 55];
console.log(myArr);

let myArr2 = new Array(12, 34);
console.log(myArr2);

// 1.Push - arrayin sonuna element elave edir ve arrayin uzunlugunu qaytarir

// myArr.push("Salam");
// console.log(myArr);

// 2.Unshift - arrayin basina element elave edir ve arrayin uzunlugunu qaytarir

// myArr.unshift("Sagol");
// console.log(myArr);

// 3.Pop - arrayin sonuncu elementi silir ve arrayin uzunlugunu qaytarir

// myArr.pop()
// console.log(myArr);

// 4.Shift - arrayin ilk elementini silir ve arrayin uzunlugunu qaytarir

myArr.shift()
console.log(myArr);

// 5. Length - arrayin uzunlugunu dondurur

let arrayLength = myArr.length
console.log(arrayLength);
