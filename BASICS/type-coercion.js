//* type coercion => javaScript automatically converts types for us
//?  type coercion happens whenever is dealing with two values  that have different types
//? in this case javascript convert one of the values to match the other 👍 to let the operation executable

console.log("I am " + 38 + " years old "); // here 23 will be automatically changed to string with type coercion under the hood
console.log("23" - "10" - 3); // javaScript turns the strings to numbers

let a = "10";
let b = 20;
let c = true;

console.log(a + b); // output will be 1020
console.log(+a + b); // output will be 30  .. first + is the unary
console.log(Number(a) + b); // output will be 30 first + is the unary

console.log(a - b); // output will be -10

console.log("" - 2); // -2 coz "" is 0
console.log(+""); //0
console.log(false - true); //-1

console.log(b + c); //20+1 = 21
console.log(a + b + c); // 1020true
console.log(+a + b + c); // 31
console.log(a + c); //10true
