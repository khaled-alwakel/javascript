 "use strict";

 const bookings = [];
 // ES6 default values parameters
 const createBooking = function (
   //   flightNum,
   //   price = 199 * numPassengers, // wont work because i didn't specify numPassengers yet
   //   numPassengers = 1,
   flightNum,
   numPassengers = 1,
   price = 199 * numPassengers
 ) {
   //   numPassengers = numPassengers || 1;  =>  ES5

   const booking = { flightNum, numPassengers, price };

   bookings.push(booking);
   return bookings;
 };

 console.log(createBooking("LH123"));
 console.log(createBooking("LH123", 2, 800));
 console.log(createBooking("LH123", undefined, 5)); // skip the default value with undefined

 /**==================== */
 //* How Passing Arguments Works : Value VS Reference

 const flight = "LH232";

 const charlie = {
   name: "Charlie Chaplin",
   passport: 128596578453,
 };

 const checkIn = function (flightNum, passenger) {
   console.log(flightNum);
   flightNum = "LH999"; // flightNum is just a copy of flight => PASS BY VALUE, so the value is simply copied
   console.log(flightNum);

   passenger.name = `MR.${passenger.name}`; // => PASS BY REFERENCE
   return passenger.passport === 128596578453 ? `Check In` : `Wrong passport`;
 };

 console.log(checkIn(flight, charlie));

 console.log(flight);
 console.log(charlie);

 // Example
 const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 100000000);
 };

 console.log(newPassport(charlie));
 console.log(checkIn(flight, charlie));

 /**
  * * IMPORTANT NOTE
  * in programming,there are two terms that are used all the time when dealing with functions,which is passing by value, and passing by reference, and many experienced programmers that are new to JavaScript have some confusion between these terms, and how it works in JavaScript.

  ** JavaScript does not have passing by reference only passing by value,even though it looks like it's passing by reference

  * So there are languages like C++,where you can pass a reference to any value,instead of the value itself.This works even with primitives,so you could pass a reference to the value of five,and then the original value,outside of the function, would be changed.

  ** JavaScript does not have pass by reference, because as we just learned,for objects, we do in fact pass in a reference.So the memory address of the object.However, that reference itself is still a value.It's simply a value that contains a memory address.So basically we pass a reference to the function,but we do not pass by reference,and this is an important distinction.

  ** look at theory-lectures pdf at => page 115

  */

 //* FIRST CLASS FUNCTIONS

 // 1) functions accepting callback functions
 /**
  * * call back functions in useful for :
  * 1) make it easy to split out our code into more reusable and more connected parts
  * 2) abstraction : hide detail of code implementation,
  */

 const oneWord = function (str) {
   return str.replace(/ /g, "_").toLowerCase();
 };

 const upperFirstWord = function (str) {
   const [first, ...others] = str.split(" ");
   return [first.toUpperCase(), ...others].join(" ");
 };

 // higher order function
 const transformer = function (str, callBackFunction) {
   return {
     "original string ": str,
     "transformed string": callBackFunction(str),
     "transformed by ": callBackFunction.name,
   };
 };

 console.log(transformer("javascript is the best", upperFirstWord));
 console.log(transformer("javascript is the best", oneWord));

 // 2) function returning functions
 const greet = function (greeting) {
   return function (name) {
     return `${greeting} ${name}`;
   };
 };

 // const greet = (greeting) => (name) => `${greeting} ${name}`;

 const greeterHey = greet("hi");
 console.log(greeterHey("charlie"));
 console.log(greet("bye")("sam"));
 //===============================

 //* the call and apply methods

 const lufthansa = {
   airline: "lufthansa",
   iataCode: "LH",
   bookings: [],
   // book:function()
   book(flightNum, name) {
     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
     return `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`;
   },
 };
 console.log(lufthansa.book(29, "john doe"));
 console.log(lufthansa.bookings);

 const euroWings = {
   airline: "euroWings",
   iataCode: "EW",
   bookings: [],
 };

 // instead of duplicate book() in lufthansa and euroWings
 // const book = lufthansa.book; // or i can define function here
 // console.log(book(23, "jimmy")); // BUG because it is a regular function call  .and no more a method , so the 'this' keyword will be undefined at least in strict mod, otherwise it will be Global object

 //* FIX => we need to tell javascript explicitly what the 'this' keyword in book() should be like, what this point at lufthansa or euroWings ? .call() .apply() .bind()

 // create booking in euroWings airlines
 const book = lufthansa.book;

 console.log(book.call(euroWings, 23, "sara ali"));
 console.log(euroWings);

 console.log(book.call(lufthansa, 239, "charlie chaplin"));
 console.log(lufthansa);
 //=====================

 // Apply
 // it's like .call() BUT it don't receive a list of argument after the this keyword, it take an array of arguments
 const flightData = [583, "charlie chaplin"];
 console.log(book.apply(euroWings, flightData));
 //==============================================

 //* bind()
 // it's like .call(), but it doesn't call the function . it returns a new function where the this keyword is bound
 // so it set to whatever value we pass into bind

 // book.bind(euroWings); =>  return new function where the this keyword set always to euroWings
 const bookEuroWings = book.bind(euroWings);
 console.log(bookEuroWings(23, "jimmy wolf"));
 // now i can use bookEuroWings always when i need to book for a new person. instead of using .call() every time
 const bookLufthansa = book.bind(lufthansa);
 console.log(bookLufthansa(55, "roy rodrigo"));

 //  use bind for one specific airline and specific flight number
 const bookEuroWings23 = book.bind(euroWings, 230);
 console.log(bookEuroWings23("Tommy Hilfiger"));
 console.log(bookEuroWings23("mark henry"));

 const bookEuroWings230Max = book.bind(euroWings, 230, "MAX"); // MAX only will book here :)
 console.log(bookEuroWings230Max());

 // Partial Application
 const addTax = (rate, value) => value + value * rate;
 console.log(addTax(0.1, 200));

 const addTaxVAT = addTax.bind(null, 0.23); // reset the rate
 // it's like const addTaxVAT = (rate, value) => value + value * 023
 console.log(addTaxVAT(300));

 //currying  Challenge
 function addTaxRate(rate) {
   return (value) => value + value * rate;
 }
 console.log(addTaxRate(0.23)(100));
 //===================================

 //* IIFE Immediately Invoked Function Expression

 const runOnce = function () {
   console.log(`this will run again`);
 };
 runOnce();

 (function () {
   console.log(`this will never run again`);
 })();

 (() => {
   console.log(`this will never run again`);
 })();

 //=============================

 //* CLOSURES اغلاق
 // we don't create closures manually like create new function . closure simply happens automatically in certain situations, we just need to recognize these situations

 const secureBooking = function () {
   let passengerCount = 0;
   return function () {
     passengerCount++;
     return `${passengerCount} passengers `;
   };
 };

 console.log(secureBooking()());
 const booker = secureBooking();
 console.log(booker());
 console.log(booker());
 console.log(booker());

 //? how booker() function increments the passengerCount variable that defined in secureBooking function that actually hals already finished executing and removed from call stack , it is  because a closures see theory lectures pdf at page 129

 console.dir(booker); // see in chrome console .

 //* we don't need to return function from another  function  to create closures

 // Example 1
 let f;
 const g = function () {
   const a = 23;
   f = function () {
     return a * 2;
   };
 };

 const h = function () {
   const b = 7;
   f = function () {
     return b * 2;
   };
 };

 console.log(g());
 console.log(f());
 console.dir(f); // it has access to a value
 // reassign by h()
 console.log(h());
 console.log(f());

 console.dir(f); // in chrome browser you will see that it has the b value not a anymore because it has been reassigned

 // Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`we are now boarding all ${n} passengers `);
    console.log(`there are 3 groups,each with ${perGroup} passengers `);
  }, 2000);

  console.log(`will start boarding in ${wait} seconds`);
};

//* PROVE that closure does have priority over the scope chain
const perGroup = 1000;

boardPassengers(180, 3);



