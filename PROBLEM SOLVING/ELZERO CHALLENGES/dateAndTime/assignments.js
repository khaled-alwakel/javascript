//* ASSIGNMENTS 159 - 168


//* ASSIGNMENTS 1
//==================
let dateNow = new Date();
let birthday = new Date("Jul 24, 84");
let dateDiff = dateNow - birthday;

// Needed Output
let seconds = Math.trunc(dateDiff/1000)
console.log(`${seconds} seconds` );
// "1247939400 Seconds"
let minutes = Math.trunc(seconds / 60);
console.log(`${minutes} minutes`);
// "20798990 Minutes"
let hours = Math.trunc(minutes / 60);
console.log(`${hours} hours`);
// "346650 Hours"
let days = Math.trunc(hours / 24);
console.log(`${days} days`);
// "14444 Days"
let months = Math.trunc(days / 30);
console.log(`${months} months`);
// "481 Months"
let years = Math.trunc(months / 12);
console.log(`${years} years`);
// "40 Years"

console.log("===========================")
//===========================

//* ASSIGNMENTS 2
//==================
let date = new Date();

date.setTime(1001);
date.setHours(0)
date.setFullYear(1980)
console.log(date);

console.log("===========================")
//===========================

//* ASSIGNMENTS 3
//==================
let date1 = new Date();
date1.setMonth(date1.getMonth(),0)
console.log(date1)
console.log("===========================")
//===========================

//* ASSIGNMENTS 4
//==================


// Needed Output
let age1 = new Date("07-24-1984");
let age2 = new Date("07/24/1984");
let age3 = new Date("Jul 24 1984");
console.log(age1);
console.log(age2);
console.log(age3);
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

console.log("===========================")
// //===========================

// //* ASSIGNMENTS 5
// //==================
// const start = performance.now();
// for (let i = 0; i < 99999; i++){
//     console.log(i+1);
// }
// const end = performance.now();
// console.log(`loop took ${Math.trunc(end-start)} milliseconds`)
// console.log("===========================")
// //===========================

//* ASSIGNMENTS 6
//==================
// // Write Your Generator Function Here
// function* gen() {
//     let index = 14;
//     let hundredIncrement = 0; 
//     while (true) {
//         yield index;
//         index = index+ hundredIncrement + 140;
//         hundredIncrement += 200;
//     }
  
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// //===========================

//* ASSIGNMENTS 7
//==================
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }
  
  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
console.log("===========================")

// //===========================

//* ASSIGNMENTS 8
//==================