const account1 = {
  owner: "Charlie Chaplin",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// * all numbers are presented internally as floating numbers , no matter of how you wrote them
console.log(23 === 23.0);

// * all numbers are represented in a 64 base 2 format , so it always stored in binary format, so we have only one data type for numbers, in this binary form it's hard to represent some fractions that are very easy to represent in the base of 10, like 0.1 it's hard to be represented in binary...

console.log(0.1 + 0.2); // it should be 0.3 not 0.30000000000000004
console.log(3.1 + 3.2);
console.log((3.1 + 3.2).toFixed(1));
console.log(0.1 + 0.2 === 0.3); // false :) it should be true .. error in js we have to accept

// check if value is not a number, Number.isNaN return true if ONLY the value is NaN

console.log(Number.isNaN(2));

// '3' is not a number , but return false because it is a string not NaN
console.log(Number.isNaN("3"));

console.log(+"20px");
console.log(Number.isNaN(+"20px"));

console.log("sam" / 2);
console.log(Number.isNaN("sam" / 2));

console.log(NaN);
console.log(Number.isNaN(NaN));

console.log(23 / 0);

console.log(Number.isNaN(23 / 0));

// Better way to Check if the value is a number
console.log(Number.isFinite(3));
console.log(Number.isFinite("3"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(+"3px"));

// Math And Rounding
console.log(5 ** 2);
console.log(25 ** (1 / 2)); // square root
console.log(Math.sqrt(25));

console.log(2 ** 3);
console.log(8 ** (1 / 3)); //  cubic root

// calculate the radius of circle with 10 px
console.log(Math.PI * 10 ** 2);

// Random values
console.log(Math.random()); // random values between  0  and 1

console.log(Math.floor(Math.random() * 3)); // 0 upto 3
console.log(Math.floor(Math.random() * (3 + 1))); // 0 upto 4
console.log(Math.floor(Math.random() * 3 + 1)); // 1 up to 4
// Function to generate integers  between 2 values
const randomInt = (min, max) => {
  /** steps
   * Math.floor(Math.random() * (max - min+1)) =>  0 upto 9
   * add min to all of these =>  2 upto 11
   */
  console.log(Math.floor(Math.random() * (max - min)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(2, 10));
console.log(randomInt(-10, -2));

//* Rounding integers
console.log(Math.round(2.9));
console.log(Math.round(2.2));

// rounded up
console.log(Math.ceil(23.1));
console.log(Math.ceil("23.1")); // they do type coercion

// rounded down
console.log(Math.floor(23.9));
console.log(Math.floor(23.1));

// remove decimal point
console.log(Math.trunc(23.9));
console.log(Math.trunc(23.1));

// Math.trunc() vs Math.floor()
// in positive  numbers
console.log(Math.trunc(23.9));
console.log(Math.floor(23.9));
// in negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//* Rounding decimals
console.log((22.777).toFixed(0)); //Always return string'3'
console.log(+(22.777).toFixed(2)); // Convert string to number

// ? why (22.777) has method while it is primitive ?
//* Because of Boxing
// primitives like 22.777 don't have methods , behind the scenes js will do BOXING , is to transform 22.777 to  a number object , then call the toFixed method , and once the operation is finished it will be converted back to a primitive

console.log(Number(22.777).toFixed(2));

//* BIGINT Es2020
const big = 252552453431354343413546843165n;
console.log(big);

// Operations

// console.log(big + 23); // Error
// console.log(Math.sqrt(16n));// Error
console.log(big + BigInt(23));

// Exceptions
console.log(20n > 4);
console.log(20n === 20);
console.log(20n == 20);
console.log(big + "is really a big number"); // will be converted to string
