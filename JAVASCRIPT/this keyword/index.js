const obj = {
  name: "Rishi",
  say() {
    console.log(this.name);
  },
};

obj.say();
// --------------------------------
const obj1 = {
  name: "Rishi",
  say: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

obj1.say();

// -------------------------------
const obj2 = {
  name: "Rishi",
  say() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

obj2.say();

// ------------------------

const obj3 = {
  name: "Rishi",
  say() {
    return function () {
      console.log(this.name);
    };
  },
};

const fn = obj3.say();
fn();