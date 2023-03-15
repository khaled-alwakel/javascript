// assaignments 147 - 158

// assignment 1
//----------------

// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

// Needed Output

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"

// solution
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  //methods
  run() {
    return `car is running now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let Mercedes = new Car("Mercedes", "2012", 250000);
let Bmw = new Car("Bmw", "2010", 270000);
let RollsRoyce = new Car("RollsRoyce", "2018", 500000);

console.log(
  `Car One Is ${Mercedes.n} And Model Is ${Mercedes.m} And Price IS ${Mercedes.p} `
);
console.log(Mercedes.run());

//----------------
// assignment 2
//----------------

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || "unknown";
  }

  fullDetails() {
    return `${this.name} serial is ${this.serial} And Size Is ${this.s}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//----------------
// assignment 3
//----------------
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {
    // get here to fetch showData as property
    let cardText = this.#c.toString(); // toString() coz it works only with string
    let result = cardText.match(/\d{4}/gi);
    return `Hello ${this.u} Your Credit Card Number  Is ${result.join("-")}`;
  }
}
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

//-----------------
// assignment 4
//--------------\
// Write Your Code Here
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

//-----------------
// assignment 5
//--------------\

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    enumerable: false,
  },
});
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}
Object.defineProperty(myObj, "id", {
  enumerable: true,
});
console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
