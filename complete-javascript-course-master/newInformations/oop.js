"use strict";

/////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };

  // never use this . coz imagine that we will make 1000 instance of Person , that what will happen  each of  1000 object will carry that function here, like we create a 1000 copies of it, that will be terrible for the performance of our code
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);
//  all functions in js including constructor functions has automatically  a property called prototype

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

// all objects that created through this constructor function , will inherit all the methods and properties that are defined on this prototype property
console.log(jonas.calcAge());
console.log(matilda.calcAge());

//  how and why it works ? because each object has access to the methods and properties from it's prototype and the prototype of jonas and matilda  is person.prototype, we can confirm that with __proto__ property . which every object has
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

//* 3. {} linked to prototype => which create __proto__  property and sets it's value to the prototype of the function that is being called

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
<<<<<<< HEAD
console.log(Object.prototype.isPrototypeOf(Person));
//  Person.prototype should names like this prototypeOfLinkedObjects , LOL just to not be confused 😆
=======

// .prototypeOfLinkedObjects  Person.prototype should names like this LOL just to not be confused 😆
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587

// we cat set properties on prototype not just methods
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

///////////////////////////////////////

// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // each time this code here is executed, the setter is gonna be executed
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists which is this.fullName

  // it's useful in validation => because before ( this.fullName = fullName)  this setter  will be executed

  // so the  fullName(name) name here is equal to fullName passed to the constructor

  // BUT the setter and the constructor will try to set this.fullName together at the same time and it will be and error of memory exceeded. so we have to use a new property like _fullName ( as a convention ) to avoid this

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName; // because we can't do this.fullname because it is created as _fullname from the setter
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode even it did't activated

const walter = new PersonCl("Walter White", 1965);
// PersonCl.hey();

//////////////
// * Object.create

const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

console.log("------");
<<<<<<< HEAD
const steven = Object.create(PersonProto); // empty object . linked to prototype (PersonProto) with __proto__
console.log(steven.__proto__ === PersonProto);

=======
const steven = Object.create(PersonProto); // empty object . linked to prototype (PersonProto)
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

// better way using init method
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

/**==================================== */
//* 1) Inheritance Between "Classes": Constructor Functions

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

<<<<<<< HEAD
//Linking prototypes

// i have to do this before make any methods in EV.prototype. coz object.create will make an empty object . so i make the empty object then assign methods to it
=======
// LINKING PROTOTYPES : i have to do this before make any methods in Student prototype. coz object.create will make an empty object . so i make the empty object then assign methods to it
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
Student.prototype = Object.create(Person2.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person2);
console.log(mike instanceof Object);

<<<<<<< HEAD
console.dir(Student.prototype.constructor);

//* 2) Inheritance Between "Classes": ES6 Classes

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
//

/**===================== */
// Inheritance Between "Classes": Object.create

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

=======
/////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto2 = {
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
<<<<<<< HEAD
};

const max = Object.create(PersonProto2);
console.log(max);

=======
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
const StudentProto = Object.create(PersonProto2);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
<<<<<<< HEAD
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);

  // FIX:
=======
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

<<<<<<< HEAD
=======
////////////////
>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
<<<<<<< HEAD
=======
  // 1) Public fields (instances)

>>>>>>> e0d70c5e816ca6adca6b341e66e113c52602d587
  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
