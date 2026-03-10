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

for(let i = 1; i<=4; i++){
  for(let j = 1; j<=i; j++){
    process.stdout.write(i + j - 1)
  }
  console.log();
  
}