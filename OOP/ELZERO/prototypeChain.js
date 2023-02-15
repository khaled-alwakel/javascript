/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

// any function created it had it prototype and class if a function 
class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  } 
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);
  
// my improve to prototype of class User and Object in general 

  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };

  Object.prototype.love = "khaled alwakel";
  
  String.prototype.addDotBeforeAndAfter = function () {
    return `-${this}-`;
  };
  
  let myString = "khaled";
  console.log(myString)
  