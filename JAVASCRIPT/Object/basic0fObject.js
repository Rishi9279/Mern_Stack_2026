let user = {
  name: "Rishi",
  age: 22,
};
let key = Object.keys(user);
console.log(key);

let value = Object.values(user);
console.log(value);

let users = [
  {
    id: 1,
    name: "Rishi",
    age: 22,
    isActive: true,
    address: {
      city: "Patna",
      pincode: 800001,
    },
  },
  {
    id: 2,
    name: "Aman",
    age: 17,
    isActive: false,
    address: {
      city: "Delhi",
      pincode: 110001,
    },
  },
  {
    id: 3,
    name: "Rahul",
    age: 25,
    isActive: true,
    address: {
      city: "Mumbai",
      pincode: 400001,
    },
  },
];

// Task 1: Print All Names
let name = users.map((value) => {
  return value.name;
});
console.log(name);

//  Task 2: Only Active Users
let activeUser = users.filter((user) => user.isActive).map((user) => user.name);
console.log(activeUser);

// Task 3: Print Name + City
let city = users.map((user) => `${user.name} - ${user.address.city}`);
console.log(city);

//  Task 4: Age > 18

let age = users.filter((user) => user.age > 18).map((user) => user.name);
console.log(age);

let newArr = users.map((user) => {
  return { name: user.name, city: user.address.city };
});
console.log(newArr);
