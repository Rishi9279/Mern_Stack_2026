//  for of loop

let arr = [10, 20, 30];

for (const value of arr) {
  console.log(value);
}

//   Using for...of, print each number multiplied by 2.

let arr1 = [3, 6, 9, 12];

for (const value of arr1) {
  console.log(value * 2);
}

// Using for...of, calculate the sum of all numbers.
let arr2 = [5, 10, 15, 20];
let sum = 0;

for (const value of arr2) {
  sum += value;
}
console.log(sum);

//   Using for...of, print only the numbers greater than 10.

let arr3 = [12, 7, 5, 20, 9];

for (const value of arr3) {
  if (value > 10) {
    console.log(value);
  }
}

//   Using forEach, print each number multiplied by 3.
let arr4 = [2, 4, 6, 8];

arr4.forEach(function (value) {
  console.log(value * 3);
});

arr4.forEach((value) => {
  console.log(value * 5);
});

// print only number which is greater than 10 using for each loop
let arr5 = [5, 12, 8, 20, 3];

arr5.forEach((value) => {
  if (value > 10) {
    console.log(value);
  }
});

let array = [1, 2, 3];
let result = [];

array.forEach((value) => {
  result.push(value * 2);
});
console.log(result);


let array1 = [1, 2, 3];
array1.forEach((value) => {
  console.log(value * 2);
});
