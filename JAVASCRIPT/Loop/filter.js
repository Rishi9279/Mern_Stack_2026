//  Return only values > 100
let prices = [50, 120, 80, 200, 30];

let result = prices.filter((value) => value > 100);
console.log(result);

// Step 1: Keep only prices greater than 100
// 👉 Step 2: Apply 10% discount on those prices
let prices1 = [50, 120, 80, 200, 30];

let answer = prices1
  .filter((value) => value > 100)
  .map((value) => {
    return value - value * 0.1;
  });
console.log(answer);

// 👉 Step 1: Keep only users with age >= 18
// 👉 Step 2: Return only their names
let users = [
  { name: "Rishi", age: 22 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
];

let userName = users.filter((value) => value.age >= 18).map((value) => value.name);
console.log(userName);


