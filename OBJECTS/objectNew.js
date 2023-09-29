/*
  Object
  *  Create With New Keyword new Object();
*/

// * let user = new Object({
//     age: 20,
//   });
  
//   console.log(user);
  
//   user.age = 38; // update value
//   user["country"] = "Egypt";
  
//   user.sayHello =  ()=> `Hello`;
  
  
//   console.log(user);
//   console.log(user.age);
//   console.log(user.country);
// console.log(user.sayHello());
  //===================================================

  /*
  * Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this); // window
console.log(this === window); // true

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);  // this refer the the function owner [button]
}; 

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);  // this === user 
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());
//-----------------------------------


