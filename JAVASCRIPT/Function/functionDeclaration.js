function greet(name) {
  console.log("hello " + name);
}
greet("Rishi");

function greet1() {
  console.log("hello Rishi");
}
greet1();

function sum(a, b) {
  return a + b;
}
let ans = sum(4, 5);
console.log(ans);

function double(x) {
  return x * 2;
}
let ans1 = double(5);
console.log(ans1);

function test() {
  console.log(5);
}

let x = test();
console.log(x);

function abcd() {
  console.log("hello");
  return;
}
let y = abcd();
console.log(y);
