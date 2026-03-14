//    print array using loop

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// sum of  an array
let sum = 0;
let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr1[i];
}
console.log(sum);

// find the largest element

let largestArr = [5, 8, 2, 10, 3];
let maxArr = largestArr[0];

for (let i = 1; i < largestArr.length; i++) {
  if (largestArr[i] > maxArr) {
    maxArr = largestArr[i];
  }
}
console.log(maxArr);

// find the smallest number in array

let smallArr = [7, 3, 9, 2, 5];
let minArr = smallArr[0];

for (let i = 1; i < smallArr.length; i++) {
  if (smallArr[i] < minArr) {
    minArr = smallArr[i];
  }
}
console.log(minArr);

// find the second largest numbe in array

let secondLargestArr = [7, 3, 9, 2, 5];

let largest = secondLargestArr[0];
let secondLargest = secondLargestArr[0];

for (let i = 1; i < secondLargestArr.length; i++) {
  if (secondLargestArr[i] > largest) {
    secondLargest = largest;
    largest = secondLargestArr[i];
  } else if (secondLargestArr[i] > secondLargest) {
    secondLargest = secondLargestArr[i];
  }
}
console.log(secondLargest);
