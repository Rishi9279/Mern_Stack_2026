let arr = [1, 2, 3];
let copy = [...arr];
copy.pop();
console.log(copy);
console.log(arr);

let arr1 = [1, 2, 3, 4, 5];

let [a, b, ...rest] = arr1;
console.log(a);
console.log(b);
console.log(rest);

