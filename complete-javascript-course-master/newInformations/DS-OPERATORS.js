const fs = require("fs");

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Arrays :

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables without destructing
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);



[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0)); // ['Garlic Bread, Pizza']
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


function pers (){
  console.log('hello world ')
}