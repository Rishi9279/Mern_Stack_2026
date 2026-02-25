var x = 1;

function outer() {
  function inner() {
    console.log(x);
  }

  var x = 2;

  inner();
}

outer();
