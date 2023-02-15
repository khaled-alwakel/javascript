//===================== ASSIGNMENTS 23- 26=====================//
// assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100_000.00); // 100000
console.log(10_00_00); // 100000
console.log(6e4 + 4e4); // 100000
console.log(1_00_000); // 100000
console.log(1000e2); // 100000
console.log(10e4); // 100000
console.log(100000.00); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(1e5); // 100000
console.log(100e3); // 100000
//------------------------------
//assignment 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//assignment 5
let num = 10;

console.log(Number(Number.isInteger(num)) + true); // 2

// assignment 6

let flt = 10.4;

console.log(+flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(parseFloat(flt))); // 10

// assignment 7
console.log(Math.floor(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
// ==================================challenges=============================//
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// find the smallest number in all variables and return integer
console.log(Math.round(Math.min(a,b,c,d)));

// use variables a+d one time to get the needed output
console.log(Math.pow(a, Math.round(d)));  //  is 10000

//get integer "2" from d variable with 4 methods
console.log(+d.toFixed(0)); //2
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// use variable b + d to get this values  use variable once 
console.log( (Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67 =>string
console.log( Math.round(b) / Math.ceil(d));  // 67 => Number



