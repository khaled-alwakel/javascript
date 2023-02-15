/*
  Array Methods
  *- Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {  //* using map function 
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

//* combine set with array.from

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);
console.log(mySet);
console.log(Array.from(mySet));  // array from mySet 

console.log([...new Set(myArray)]); // we will study it later

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));