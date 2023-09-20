// Loops  - Donguler

// 1.for

// 0 dan 10 a qeder ededleri yazdirmaq

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 0 dan 10  qeder cut ededler

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// 0 dan 10  qeder tek ededler

// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} cut ededdir`);
//   } else {
//     console.log(`${i} tek ededdir`);
//   }
// }

// 0 dan 10 a qeder butun ededlerin cemi

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += i; // sum = sum + i
//   console.log(i);
// }

// console.log("Sum of number: " + sum);

// Mueyyen edede catdiqda stop etsin

// for (let i = 0; i <= 12; i++) {
//   if (i == 10) {
//     break;
//   }
//   console.log(i);
// }

// Arrayin her bir elementini yazdirmaq

// let arr = [1, 4, 6, 8, 12]

// for (let index = 0; index < arr.length; index++) {
//    console.log(arr[index]);
// }

// 20 den 0 a qeder ededleri yazdirmaq

// for (let index = 20; index > 0; index--) {
//   console.log(index);
// }

// *********************************************************************
// *********************************************************************
// *********************************************************************

// 2.while

// 0 dan 10 a qeder ededleri yazdirmaq

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 15 e qeder cut ededleri yazdirmaq

// let number = 0;

// while (number <= 15) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
//   number++;
// }

// Mueyyen edede catdiqda dayansin

// let j = 1;

// while (j < 12) {
//   console.log(j);
//   if (j == 7) {
//     break;
//   }
//   j++;
// }

// *********************************************************************
// *********************************************************************
// *********************************************************************

// 3.do while

// 0  dan 10 a qeder ededleri yazdirmaq
// let i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// 1 den 20 ye qeder tek ededlerin cemini tapmaq

// let i = 1;
// let sum = 0;

// do {
//   if (i % 2 == 1) {
//     sum += i;
//   }
//   i++;
// } while (i <= 20);

// console.log("Ededlerin cemi: " + sum);

// Arrayin elementlerini yazdirmaq

// let arr = [23, 34, 56, 78, 12];

// let i = 0;

// do {
//   console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// do while ve while ferqi

// let i = 12;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let j = 12;

// do {
//   console.log(j);
//   j++;
// } while (j < 5);

// *********************************************************************
// *********************************************************************
// *********************************************************************

// 4.for in

let arr2 = [12, 34, 56, 67];

for (let number in arr2) {
  console.log(number, arr2[number]);
}

// 5.for of

for (const item of arr2) {
    console.log(item, arr2.indexOf(item));
}


// 6.forEach
// 7.map


// *********************************************************************
// *********************************************************************
// *********************************************************************