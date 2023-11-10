"use strict";
lastName = "Schmedtmann"; // it will create property on the Global object
console.log(lastName);
// console.log(global.lastName);
/**======================================= */

// we use Comparison operators  to produce  Boolean values
console.log(3 > 1); // true
let isPositive = -3 > 0;
console.log(isPositive);
/**=================================== */

// operators precedence
console.log(4 + 6 / 2);
// here it will 4/2 first then +3  because / has more precedence over +
// to avoid this use () it has maximum precedence

console.log((4 + 6) / 2);
/**======================== */

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

/**======================= */
// Truthy and Falsy Values

// falsy values are values that are not exactly false,BUT will become false when we try to convert them to Boolean

// 5 falsy values: 0, '', undefined, null, NaN, and false of course
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let height = 0;
if (height) {
  // here javascript will try to coerce any value into a boolean (height)
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
/**==================== */

/* Statement And Expression

  * Expression : is a piece of code that produce value
  ex: 4+5 is and Expression

 * statements:  is a sequence of actions
 * ex: if else statement
 * if(condition) let x =4

 * this different is important because javascript expect expressions and statements in different places
 
 * for example in template literals we can only use expressions NOT statements

  console.log(`i'm ${2023-1984} years old`)

  NOT console.log(`i'm ${if (condition)  console.log ('something)`)
 */

/**===================== */

/** The Conditional (TERNARY) Operator
 
 * the conditional operator is just an operator , and remember that an operator always produce a value, in another words an operator is an expression, so we can assign that value to a variable
 
 * so we can take advantage of this and conditionally create a variables

 * const age = 15
 * const drink = age > 18 ? 'Wine' : 'Water'
 
 * notice that is ( age > 18 ? 'Wine' : 'Water') is expression . A VALUE that why i assigned it to x 
 
 * Using It In Template Literals
  console.log(`i like to drink ${age > 18 ? 'Wine' : 'Water'}`)
 */

let age = 25;
console.log(`i like to drink ${age > 18 ? "Wine" : "Water"}`);

/**=============================== */
