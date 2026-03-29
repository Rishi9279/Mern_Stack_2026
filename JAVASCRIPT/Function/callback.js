function greet(name, callback) {
  console.log("hello", name);
  callback();
}
greet("Rishi", function () {
  console.log("What's Up");
});

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add)); // 5
console.log(calculate(2, 3, multiply)); // 6

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


// --------------------------------------------------------------
// [2,3,4]

function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let val = callback(arr[i]);
    result.push(val);
  }
  return result;
}

let answer = processArray([1, 2, 3], (x) => x + 1);
console.log(answer);

// -----------------------------------------------------
function filterArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let answer1 = filterArray([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(answer1);

// [2,4]

// -------------------------------------------------

let arr = [1, 2, 3];

let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 3);
}
console.log(result);


//  --------------------------------------------------
function filterArray(arr, callback) {
  return arr.filter(callback);
}

let a = filterArray([10, 15, 20, 25], (x) => x > 18);
console.log(a);

