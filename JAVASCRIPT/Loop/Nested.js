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
    process.stdout.write(j + " " );
  }

  console.log();
}