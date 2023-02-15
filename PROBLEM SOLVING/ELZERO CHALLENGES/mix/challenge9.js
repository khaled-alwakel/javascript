// *====== ASSIGNMENTS  40- 47===========*

//* ASSIGNMENT 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(0, 3)); // ["Ahmed", "Elham", "Osama"];
//==============================================================

//* ASSIGNMENT 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]
//=========================================================

//* ASSIGNMENT 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse()

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//=============================================================

//* ASSIGNMENT 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - true][0].slice(2).toUpperCase()); // ZERO
console.log(words[true + true][0].slice(2).toUpperCase()); // ZERO
//========================================================

//* ASSIGNMENT 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle) === true) {
    console.log("Found");
}
if (haystack.indexOf(needle) === 1) {
    console.log("Found"); 
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found"); 
}
if (haystack.lastIndexOf(needle) === 1) {
    console.log("Found");
}

//=========================================

//* ASSIGNMENT 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2[arr2.indexOf("F")].concat(arr1[arr1.indexOf("X")],arr2[arr2.indexOf("Y")]).toLowerCase();

console.log(allArrs); // fxy

//==============================================

//*  ARRAY CHALLENGE

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
zero++; //1
counter++; //4

my.splice(counter, ++zero);

my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(--zero,--counter)); // ["Elham", "Mazero"]

console.log(my[zero].slice(--zero,--counter).concat(my[counter].slice(counter))); // "Elzero"

console.log(my[counter][Math.pow(counter, counter)].concat(my[counter][Math.pow(counter, counter) + ++zero].toUpperCase())); // "rO"

