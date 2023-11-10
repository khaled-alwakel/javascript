/**
 * number 
 * double precision
 * syntactic sugar 
 * e
 * **
 * width decimal
 * number min value
 * number max value 
 
 */
console.log(1000000);
console.log(1_000_000); // syntactic sugar
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.0);

//big int
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

/**==============number method============ */

console.log((100).toString()); // return string from umber
console.log((100).toString());
console.log((100.55555).toFixed(2)); // return string  truncate whatever after decimal you choose & third num will be rounded if it's >=5
// toFixed(2) to ensure that 2 numbers will be printed after decimal like .2f

console.log(+100); //100
console.log(Number("100 alice")); //NaN
console.log(Number("100")); //100
console.log(parseInt("100 alice")); //100  parse data and return number,,
console.log(parseInt("alice 100 alice")); // it's not smart enough it will return NaN  must start with number

console.log(parseFloat("100.300 alice")); //100  parse data and return number

console.log(Number.isInteger("100")); // false coz it's string
console.log(Number.isInteger(100.5)); // false coz it's float
console.log(Number.isInteger(100)); // true coz it's integer

/* The Number.isNaN() method don't converts the value to number
 * returns true if the passed value is Nan and is of the type number,
else it returns false.
*/

console.log(Number.isNaN("alice")); //false
console.log(Number.isNaN("100")); // false
console.log(Number.isNaN(100.5)); // false
console.log(Number.isNaN(100)); //false
console.log(Number.isNaN("alice" / 4)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(+"33px"));

/* original isNaN 
method returns true if a value is NaN.
The isNaN() method converts the value to a number before testing it.
*/
// true
console.log(isNaN("string")); // true
console.log(isNaN("44"));
console.log(isNaN(44));
