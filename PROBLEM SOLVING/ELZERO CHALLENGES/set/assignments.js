//* =>=>=> ASSIGNMENTS 123 - 133 <=<=<=

//* ASSIGNMENT 1

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(2);
console.log(setOfNumbers);
console.log([...setOfNumbers].indexOf(2))
// Needed Output
// Set(3) {10, 20, 2}
// 2

//====================
//* ASSIGNMENT 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort())
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// //====================
// //* ASSIGNMENT 3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myNewInfo = new Map([
  [Object.keys(myInfo)[0], myInfo.username],
  [Object.keys(myInfo)[1], myInfo.role],
  [Object.keys(myInfo)[2], myInfo.country]
]);

console.log(myNewInfo);
console.log(myNewInfo.size);
console.log(myNewInfo.has("country"))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
//====================
// //* ASSIGNMENT 4

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].filter((ele) => ele !=0 ).join(""));


// Needed Output
// 123

//====================
// //* ASSIGNMENT 5

let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName])
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Array.from(new Set(theName)))

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//====================
// //* ASSIGNMENT 6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

//locate the numbers
let numbers = chars.filter((ele) => typeof (ele) === "number");
// locate characters
let letters = chars.filter((ele) => typeof (ele) !== "number");
// make numbers always  in the beginning with new array
let newChars = [...numbers, ...letters];
// replace numbers with letters 

console.log(newChars.copyWithin(0,numbers.length,numbers.length*2))
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//====================
// //* ASSIGNMENT 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo])
// Needed Output
// [1, 2, 3, 4, 5, 6]

//====================
