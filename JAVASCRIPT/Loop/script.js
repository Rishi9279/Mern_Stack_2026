for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// print 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print odd

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// print sum

let sum = 0;

for (let i = 0; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

// print from 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// print sum from 1 to 10

let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i;
}
console.log(sum1);

// print even

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  print table of 5

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

// 1 से 10 तक सिर्फ even numbers का sum निकालो।

let evenSum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    evenSum = evenSum + i;
  }
}
console.log(evenSum);

// print 1 से 20 तक कितने even numbers हैं, यह count करके print करो।
let evenCount = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenCount++;
  }
}
console.log(evenCount);
