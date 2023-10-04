"use strict";

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

// Sets ES6
//* new set(iterable)

//* array
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

//* strings are also iterables
console.log(new Set("alice"));
console.log(new Set("book").size);

// DEALING WITH SET
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Beef Meat"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread"); // will be ignored coz it is already in set
console.log(ordersSet);
// ordersSet.clear();

// SET IS ITERABLE, so we can loop over them
for (const order of ordersSet) {
  console.log(order);
}
ordersSet.forEach((element) => {
  console.log(element);
});
//Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

const staffUnique = [...new Set(staff)];
// console.log([...staffUnique]);
console.log(staffUnique);
// spread operator works well with set because it is also iterable

/**============================ */

//* MAPS
// map is a data structure to map values to keys

// we can have any type of keys . unlike normal object which it is always a string
const rest = new Map();
// rest.set(key, value)
rest.set("name ", "classico italiano");
rest.set(1, "italy");
console.log(rest);

// the set method actually returns the updated map
console.log(rest.set(2, "portugal"));

// set method allows us to chain the set method like this
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest);

// read data from map => the get method
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get("categories"));

// Example
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.get(true)); // the result is true or false . and then true or false will map to one of these values

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear()

//* use objects as map keys
// rest.set([1, 2], "test");
// console.log(rest.get([1, 2])); // wont work, because they are not the same object in the HEAP

// it will work like this
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr)); // will work . because arr in line 88 and 89 . referring to te same place in memory

// MAP Is Iterable
for (const x of rest) {
  console.log(x);
}

// MAPS Declaration Without The set Method

const question = new Map([
  ["question", "what is the best programming language in the world ?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

const question2 = {
  question: "blabla",
  1: "c",
};
console.log(question);

// Convert Object To Maps

console.log(Object.entries(openingHours));

const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);

// Iteration Over Maps
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key} : ${value}`);
}

// Covert Map To Array
console.log(...question);

// Last Thing We have Other Methods
console.log(question.size);

// console.log(question.keys());
// console.log(question.values());
// console.log(question.entries());

// all previous 3 will give me mapIterator. so it would be nice if i convert them to array
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);

//* Which Data Structure To Use ?

/**
 * * Arrays Or Sets => for simple list [we have the values without any description ]
 * ? when i need array
 * 1) if u need ordered list of values, might contains duplicates,
 * 2) when i need to manipulate data because of useful array methods
 * ? when i need sets
 * 1) when i need to work with unique values
 * 2) when high-performance is really important , its 10 time faster than arrays
 * 3) remove Duplicates from arrays
 * * Objects Or Maps => for key-value pairs [keys allows us to describe values ]
 * ? when i need objects
 * 1) more traditional "key value" store
 * 2) easier to write and access values with . and []
 * 3)when i need to include functions (methods)
 * 4) when working with JSON (can convert to map)
 * ? when i need maps
 * 1) better performance
 * 2) keys can be ANY data types
 * 3) easy to iterate
 * 4) easy to compute size
 */

/**==================== */
//* Working With Strings - Part 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(`Macbook ${airline.slice(4, 7)} :)`);
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-8));

const checkMiddleSeat = (seat) => {
  // B & E are middle seats

  return seat.slice(-1) === "E" || seat.slice(-1) === "B"
    ? "you got middle"
    : "you got lucky";
};

console.log(checkMiddleSeat("11E"));
console.log(checkMiddleSeat("14B"));
console.log(checkMiddleSeat("23C"));

// Replace String
const priceGB = "288,97 pounds";
const priceUS = priceGB
  .replace("pounds", "dollars")
  .replace(",", ".")
  .toUpperCase();
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
console.log(announcement.includes("All"));
console.log(announcement.startsWith("All"));
console.log(announcement.startsWith("A"));
console.log(announcement.endsWith("!"));

// split method
// announcement.split( divider string)
console.log("a+very+nice+string".split("+"));
console.log(announcement.split(" "));

// using destructing with split
const [firstName, lastName] = "john doe".split(" ");
console.log(firstName, lastName);

//split and join
const newName = ["MR", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Example

function capitalize(names) {
  const result = [];
  for (const name of names.split(" ")) {
    // result.push(name[0].toUpperCase() + name.slice(1));
    result.push(name.replace(name[0], name[0].toUpperCase()));
  }
  return result.join(" ");
}

console.log(capitalize("john doe"));
console.log(capitalize("marshal mathers"));
console.log(capitalize("lighting mcqueen"));

// padding

const message = "Go To Gate 23!";
console.log(message.padStart(20, "*").padEnd(26, "*"));

// masking credit card
function maskCreditCart(number) {
  // const str = String(number);
  const str = number + "";
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, "*");
}
console.log(maskCreditCart(1325965));
console.log(maskCreditCart(132222325965));

console.log(message.repeat(4));

/**============================= */
//* String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}


