/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
    // Properties
    theName: "Alice",
    theAge: 38,
    
    // Methods
    sayHello: function () {
      return `Hello`;
    },
};
  
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
//--------------------------------------------------------
/*
  *Object
  - Dig Deeper
  * Dot Notation vs Bracket Notation
  * Dynamic Property Name
*/

let myVar = "country";

let man = {
  theName: "Bob",
  country: "Egypt",
};

console.log(man.theName);
console.log(man.country); // user.country
console.log(man.myVar); // user.country [undefined]
console.log(man[myVar]); // user.country