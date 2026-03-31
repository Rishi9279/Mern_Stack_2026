function greet(msg) {
  return function (name) {
    return `${msg} ${name}`;
  };
}
// let greetmessage = greet("Hello");
// console.log(greetmessage("Rishi"));
// console.log(greetmessage("Golu"));

console.log(greet("hello")("Rishi"));



function power(x) {
  return function (y) {
    return x ** y;
  };
}

console.log(power(2)(3));
