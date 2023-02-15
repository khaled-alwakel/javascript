//* ASSIGNMENT 71 - 78
//==============================
//* assignment1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(mix.map((ele) => isNaN(ele) ? ele : "").reduce((acc, current) => `${acc}${current}`));
//==================================

//* assignment2

// let myString = "EElllzzzzzzzeroo";

// let filtered = myString.split("").filter(function (ele, index, arr) {
//     return myString.indexOf(ele) === index ? ele : "";

// }).join("");
// console.log(filtered);
// // Elzero;

//==================================

//* assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray.reduce((acc, current) => Array.isArray(current) ? `${acc}${current.join("")}` : `${acc}${current}`));
// Elzero

//==================================

//* assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

console.log(numsAndStrings.filter((ele) => typeof(ele) === "number").map((ele) => -ele));
// [-1, -10, 10, 20, -5, -3]
//==================================

//* assignment 4

let nums = [2, 12, 11, 5, 10, 1, 99];

let addition = nums.reduce(function(acc, current) {

    return current % 2 === 1 ? acc + current : acc * current

}, 1);
console.log(addition); // 500
//--------------------------------

//* CHALLENGE 
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _ 
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";


console.log(myString.split("", --myString.length).filter((ele) => isNaN(ele) && ele !== ',').map((ele) => ele === "_" ? " " : ele).reduce((acc, current) => `${acc}${current}`).slice(true));