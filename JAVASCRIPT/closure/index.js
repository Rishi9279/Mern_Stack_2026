for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// -------------------------------------
function outer() {
  let x = 10;

  return function inner() {
    x++;
    return x;
  };
}

const fn1 = outer();
const fn2 = outer();

console.log(fn1());
console.log(fn1());
console.log(fn2());
// -------------------------------------
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
const c2 = counter();

c1();
c1();
c2();
c2();

// -------------------------------------
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counterA = createCounter();
const counterB = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterB()); // 2

// -------------------------------------

function counter() {
  let val = 1;
  return function () {
    ++val;
    return val;
  };
}
const counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

// --------------------------------------------

function outer(a) {
  return function (b) {
    return a + b;
  };
}

const fn = outer(5);

console.log(fn(3)); // 8
console.log(fn(10)); // 15

// ---------------------------------------------

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// -------------------------------------

function test() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const result = test();

result[0]();
result[1]();
result[2](); // output 3, 3, 3

// ---------------------------------------------

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));  // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120

// ---------------------------------------------

function outer() {
  let x = 0;

  return function () {
    x++;
    console.log(x);
  };
}

const fnA = outer();

setTimeout(fnA, 1000); // 1
setTimeout(fnA, 1000);  // 2
setTimeout(fnA, 1000);  // 3