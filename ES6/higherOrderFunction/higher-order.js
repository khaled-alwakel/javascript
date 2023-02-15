/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
// //   console.log(`Current Element => ${element}`);
// //   console.log(`Current Index => ${index}`);
// //   console.log(`Array => ${arr}`);
// //   console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);
//===================================
//* map practice

let swappingCase = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Elz123er4o";

let sw = swappingCase.split("").map(function (ele) {
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");

let inv = invertedNumbers.map(function (ele) {
  return -ele;
})

let ignore = ignoreBooleans.split("").map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "";
}).join("");

console.log(sw);
console.log(inv);
console.log(ignore);

//* filter 
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// //* Test Map vs Filter

let addMap = numbers.map(function (el) {
  return el + el;
});

console.log(addMap);

let addFilter = numbers.filter(function (el) {
  return el + el; // he will return number as it is coz it is already true so if u wanna add numbers here you use act wrong with filter u shud use map
});

console.log(addFilter);

//*-++_+_+_+_+_+_+_+_ PRACTICE _+_+_+_+_+_+_+_+_+_+_+_


/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""; // here i don't neeD ?:  because he look for condition if true he will return ele [but i need it it map to get the right result otherwise it will return boolean true and false the out put of isnNaN]
  })
  .join("");

console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);