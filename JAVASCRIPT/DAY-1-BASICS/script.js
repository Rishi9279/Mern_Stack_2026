// let age = 20;
// age = 21;
// console.log(age);

// const name = "Rishi";
// name = "Raj"; // kya hoga?
// console.log(name);


console.log(a);
var a = 10; // var ke case me a ki value undefined hoti hai, isliye error nahi aayega

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // let ke case me a ki value temporal dead zone me hoti hai, isliye error aayega

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30; // const ke case me bhi a ki value temporal dead zone me hoti hai, isliye error aayega