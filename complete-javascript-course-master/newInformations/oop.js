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
  console.log(2037 - this.birthYear);
};

// all objects that created through this constructor function , will inherit all the methods and properties that are defined on this prototype property
jonas.calcAge();
matilda.calcAge();

//  how and why it works ? because each object has access to the methods and properties from it's prototype and the prototype of jonas and matilda  is person.prototype, we can confirm that with __proto__ property . which every object has
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

//* 3. {} linked to prototype => which create __proto__  property and sets it's value to the prototype of the function that is being called

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects  Person.prototype should names like this LOL just to not be confused 😆

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

  // BUT the setter and the constructor will try to set this.fullName together at the same time and it will be and error of memory exceded. so we have to use a new property like _fullName ( as a convention ) to avoid this

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
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

console.log("------");
const steven = Object.create(PersonProto); // empty objct . linked to prototype (PersonProto)
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
/**==================================== */
// Inheritance Between "Classes": Constructor Functions

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
//* Linking prototypes

// i have to do this before make any methods in EV.prototype. coz object.create will make an empty object . so i make the empty object then assiagn methods to it
Student.prototype = Object.create(Person2.prototype);

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

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
