for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("Hi");
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }

  console.log();
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(j);
  }
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log();
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// ****
// ***
// **
// *

for (let i = 1; i <= 4; i++) {
  for (let j = 4; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
}

//    *
//   **
//  ***
// ****

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  console.log();
}

//    *
//   ***
//  *****
// *******

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}

// *******
//  *****
//   ***
//    *

for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}
for (let i = 3; i >= 1; i--) {
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let num = 1;

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(num + " ");
    num++;
  }
  console.log();
}

// 1
// 2 1
// 3 2 1
// 4 3 2 1

for (let i = 1; i <= 4; i++) {
  for (let j = i; j >= 1; j--) {
    process.stdout.write(j + " ");
  }
  console.log();
}

// 1
// 2 3
// 3 4 5
// 4 5 6 7

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + j - 1 + " ");
  }
  console.log();
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = i; j >= 1; j--) {
    process.stdout.write(j + " ");
  }
  console.log();
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log();
}

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= 5 - i + 1; j--) {
    process.stdout.write(j + " ");
  }
  console.log();
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log();
}

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + j - 1 + " ");
  }
  console.log();
}

// 2
// 3 4
// 4 5 6
// 5 6 7 8

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + j + " ");
  }
  console.log();
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 === 1) {
      process.stdout.write(1 + " ");
      // yaha kya print hoga ?
    } else {
      process.stdout.write(0 + " ");
      // yaha kya print hoga ?
    }
  }

  console.log();
}

// 0
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 1) {
      process.stdout.write(1 + " ");
    } else {
      process.stdout.write(0 + " ");
    }
  }
  console.log();
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let num1 = 1;

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(num1 + " ");
    num1++;
  }

  console.log();
}