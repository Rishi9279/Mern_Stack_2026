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
