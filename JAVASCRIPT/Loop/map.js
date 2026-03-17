let arr = [5, 10, 15];

let result = arr.map((value) => value + 5);
console.log(result);

// 👉 Using map(), create a new array where:
// if number is even → multiply by 2
// if number is odd → keep it same
let arr1 = [2, 4, 6, 8];

let even = arr1.map((value) => {
  if (value % 2 === 0) {
    return value * 2;
  } else {
    return value;
  }
});
console.log(even);

// Apply 10% discount to each price
// 👉 Return a new array of updated prices

let prices = [100, 200, 300, 400];

let discount = prices.map((value) => {
  return value - value * 0.1;
});
console.log(discount);

