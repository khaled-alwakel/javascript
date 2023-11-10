"use strict";

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// ES6 Enhancement: compute property names instead of having to write them out manually and literally
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // openingHours:openingHours
  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //ES6 Enhancement: instead of explicit function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // passing object to function to be  orderDelivery method, i can set default values as you can see
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//* DESTRUCTING ARRAYS

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // //* Switching variables
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // //* Receive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //* Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //* Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

//* DESTRUCTING OBJECTS
// // note : we have to provide the exact property names in the original objects

// // sine in object the order of elements does not matter, we don't need to manually skip elements like we did in array
// const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);

// // what if we wanted the variable names to be different from the property name
// const {
//   restaurantName: theName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(theName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open, close: c },
// } = openingHours;
// console.log(open, c);

// * many times we have function with a lot of parameters, but then it can be hard to know the order of parameters for someone that is using this function, so instead defining parameters manually , we can just pass an object into the function as an argument, and the function will them immediately destructure that object

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

/* ================================================================ */
//* The Spread Operator (...) => expand an array into all it's elements

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr]; // better than manually log it , or even worse loop over array
// console.log(goodNewArr);

// console.log(...goodNewArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocchi"];
// console.log(newMenu);

// // * Use Cases Of Spread Operator

// // 1) Shallow Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // 2) Join 2 arrays
// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// // Spread operator can applies on iterable only
// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = "hi";
// const letters = [...str, "!", "."];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} alice `); // wont work, that because this is not a place that expects multiple values separated by comma

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// // Objects
// // since ES 2018 , the spread operators also works on objects , even though it's not iterables
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
// console.log(newRestaurant);

// // we can de shallow copies with objects also, instead of using Object.assign()
// const restaurantCopy = { ...restaurant };
// restaurantCopy.restaurantName = "Ristorante Roma";
// console.log(restaurantCopy.restaurantName);
// console.log(restaurant.restaurantName);
// console.log(restaurantCopy);

/* ================================================================ *
//* Rest Pattern and Parameters => collect multiple elements and condense them into an array

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// REST, because on LEFT side of =
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

// 2) Functions => rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
/* ================================================================ */

//* Short Circuiting (&& and ||)

console.log("---- OR ----");
/**
 *  Use ANY data type, return ANY data type
 * short-circuiting : means that if the first value is a truthy value it will immediately return that first value
 * (if the first operand is truthy value then the other operator will not be evaluated )
 * falsy values : '', undefined, null, 0 , false
 */

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null); // undefined is a falsy value, we will go to the next operand even if it's a falsy value too

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// refactor previous example with short-circuiting and the || operator, better than ternary operator or even worse if else statement
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
/**
 *  Use ANY data type, return ANY data type
 * short-circuiting : means that if the first value is a falsy value it will immediately return that first value
 * (if the first operand is falsy value then the other operant will not be evaluated )
 * falsy values : '', undefined, null, 0 , false
 */

console.log(0 && "Jonas");
console.log(7 && "Jonas"); // 7 is truthy means the evaluation continues , and then simply the last value is returned

console.log("Hello" && 23 && null && "jonas"); // return the first falsy value

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// if the method does not exist it will return undefined , if it is exist call it with these arguments
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/*======================================= */

//*  The Nullish Coalescing Operator => ES 2020

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// so if the restaurant.numGuests is null or undefined only then the second operand (10) would be executed and returned
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

 /*======================================= */

//*  The For-of Loops
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0]}: ${item[1]}`);
}
// Destruct item array
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*======================================= */

//* Optional Chaining operator ?. / ES 2020
// if a certain property does not exist the undefined is returned immediately

// Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining
// only if the method before ? exist(!null & !undefined), so if monday exist then this "open" property will be read from there, but if not then immediately undefined will be returned
console.log(restaurant.openingHours.mon?.open);

// multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `!?`;
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.unknownMethod?.(0, 1) ?? "method does not exist");

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

// without optional chaining :(
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

/*======================================= */

//* Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object

// We Use Object.entries() Because Object Is Not Iterable .

const entries = Object.entries(openingHours);
console.log(entries);

for (const entry of entries) console.log(entry);

// [key, value] Destructing entry array . like we did before with For-Of loop
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}




