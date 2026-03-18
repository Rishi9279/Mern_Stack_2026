//  Find total price
let cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 },
  { name: "Cap", price: 300 },
];

let total = cart.reduce((acc, value) => {
  return acc + value.price;
}, 0);
console.log(total);

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 },
  { name: "Keyboard", price: 1500 },
];

let product = products.filter((item) => item.price > 1000).map((value) => value.name);
console.log(product);

//  Count how many numbers are even
let nums = [1, 2, 3, 4, 5, 6];

let evenCount = nums.reduce((acc, value) => {
  if (value % 2 === 0) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(evenCount);

// ind the sum of only even numbers
let num = [1, 2, 3, 4, 5, 6];

let sumEven = num.reduce((acc, value) => {
  if (value % 2 === 0) {
    return acc + value;
  } else {
    return acc;
  }
}, 0);
console.log(sumEven);

let product1 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 },
  { name: "Keyboard", price: 1500 },
];

let ans = product1.reduce((acc, value) => {
  if (value.price > 10000) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(ans);

// ["Rishi is 22 years old", "Aman is 17 years old", "Rahul is 25 years old"];

let users = [
  { name: "Rishi", age: 22 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
];

let answer = users.map((value) => {
  return `${value.name} is ${value.age} years old`;
});
console.log(answer);

// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
let nums1 = [1, 2, 3, 4, 5, 6];
let result = nums1.reduce(
  (acc, value) => {
    if (value % 2 === 0) {
      acc.even.push(value);
    } else {
      acc.odd.push(value);
    }
    return acc;
  },
  { even: [], odd: [] },
);
console.log(result);

// {
//   adult: ["Rishi", "Rahul"],
//   minor: ["Aman", "Ankit"]
// }
let users1 = [
  { name: "Rishi", age: 22 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
  { name: "Ankit", age: 15 },
];

let result1 = users1.reduce(
  (acc, value) => {
    value.age > 18 ? acc.adult.push(value.name) : acc.minor.push(value.name);
    return acc;
  },
  { adult: [], minor: [] },
);
console.log(result1);

// 👉 Step 1: Keep items with price > 1000
// 👉 Step 2: Find total price
let products1 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 },
  { name: "Keyboard", price: 1500 },
];

let item = products1.reduce((acc, value) => {
  // if (value.price > 1000) {
  //   return acc + value.price;
  // } else {
  //   return acc;
  // }
  return value.price > 1000 ? acc + value.price : acc;
}, 0);
console.log(item);

//  find average age
let users2 = [
  { name: "Rishi", age: 22 },
  { name: "Aman", age: 18 },
  { name: "Rahul", age: 25 },
];

let average = users2.reduce((acc, value) => {
  return acc + value.age / users2.length;
}, 0);
console.log(average);

//  convert into uppercase if age is greate than 18

let users3 = [
  { name: "Rishi", age: 22 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
];

let uppercase = users3.filter((value) => value.age > 18).map((value) => value.name.toUpperCase());
console.log(uppercase);



