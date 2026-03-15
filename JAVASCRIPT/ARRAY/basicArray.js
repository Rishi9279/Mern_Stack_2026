// 1️⃣ Print the first element
// 2️⃣ Print the last element
// 3️⃣ Change 15 → 100
// 4️⃣ Print all elements using a loop

let arr = [5, 10, 15, 20];

arr[2] = 100;

console.log(arr[0]);
console.log(arr[3]);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// [10, 20, 30, 40]
let arr1 = [20, 30];

arr1.push(40);
arr1.unshift(10);
console.log(arr1);

//  [20, 30]
let arr2 = [10, 20, 30, 40];

arr2.pop();
arr2.shift();
console.log(arr2);

// 1️⃣ Find sum of all elements
// 2️⃣ Print array in reverse order
let sum = 0;
let arr3 = [5, 10, 15, 20, 25];
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log(sum);

for (let i = arr3.length - 1; i >= 0; i--) {
  console.log(arr3[i]);
}

// 1️⃣ Find index of 15
// 2️⃣ Check if 25 exists in the array
let arr4 = [5, 10, 15, 20];
let ind = arr4.indexOf(15);
console.log(ind);

let isExist = arr4.includes(25);
console.log(isExist);

// 1️⃣ Use slice() to get
// [20, 30, 40];

//  2️⃣ Use splice() to remove 30 and 40

let arr5 = [10, 20, 30, 40, 50];

let res = arr5.slice(1, 4);
console.log(res);

arr5.splice(2, 2);
console.log(arr5);


