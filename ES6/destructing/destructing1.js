/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends; // a will be ahmed not a as long as there is reference to int in array

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends; // if u want to skip array element   just don't type anything

console.log(y);
console.log(z);

console.log("hello ");

let x = 88;
console.log(x);

let i = 0;

console.log(" hello world ");
