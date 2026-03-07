// add two number

function add(a, b) {
  return a + b;
}
console.log(add(4 , 5));

// check if number is even or odd

let number = (a) =>{
     if(a%2===0)
        return "even";
     else
        return "odd";   
}
let result = number(5);
console.log(result);

//  reverse string

let reverse = (value) =>{
    return  value.split("").reverse().join("")
}
console.log(reverse("Rishi"));
