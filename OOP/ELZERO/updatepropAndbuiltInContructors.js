/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
    }
    updateName(newName) {
        this.u = newName;
    }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero"); // string constructor

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true

console.log(strOne.constructor === String); // true coz i really use constructor under the hood
console.log(strTwo.constructor === String); // ture

// let numOne = 100;
// let numTwo = new Number(100); // string constructor

// console.log(typeof numOne);
// console.log(typeof numTwo);

// console.log(numOne instanceof Number); // false
// console.log(numTwo instanceof Number); // true

// console.log(numOne.constructor === Number); // true coz i really use constructor under the hood
// console.log(numTwo.constructor === Number); // ture