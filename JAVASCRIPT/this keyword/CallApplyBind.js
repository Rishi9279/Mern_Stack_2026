function show() {
  console.log(this.name); // Rishi
}

const user = { name: "Rishi" };

show.call(user);
// ---------------------------------

function show1(age) {
  console.log(this.name, age); // Rishi 22
}

const user1 = { name: "Rishi" };

show1.apply(user1, [22]);

//   ------------------------------------

function show2() {
  console.log(this.name); // Rishi
}

const user2 = { name: "Rishi" };

const fn = show2.bind(user2);
fn();

// -----------------------------------------

const user3 = {
  name: "Rishi",
  greet() {
    console.log(this.name); // Rishi
  },
};

const fn1 = user3.greet;
fn1.call(user3);

