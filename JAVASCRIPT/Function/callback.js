function greet(name, callback) {
  console.log("hello", name);
  callback();
}
greet("Rishi", function () {
  console.log("What's Up");
});

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(calculate(2, 3, add));      // 5
// console.log(calculate(2, 3, multiply)); // 6

function calculate(a, b, operation) {
  return operation(a, b);
}
let ans = calculate(2, 3, function (a, b) {
  return a + b;
});
let ans1 = calculate(2, 3, function (a, b) {
  return a * b;
});
console.log(ans);
console.log(ans1);
