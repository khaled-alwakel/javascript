// ===================ASSIGNMENTS 18 - 22===================//
//assignments 1

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); //0



//=============//assignments 2
let num = 3;

// Solution One
console.log(num * num - true*num); // 6

// Solution Two
console.log(num + num); // 6

// Solution Three
console.log(num + true * 3); // 6

// Solution Four
console.log(num*num-num); // 6

// Solution Five 
console.log(num+= true*num); // 6

// Solution Six
console.log(num); // 6

//=============//assignments 3

let Num = "10";

// Solution One
console.log(+Num + (+Num)); // 20

// Solution Two
console.log(Number(Num) + Number(Num)); // 20

// Solution Three
console.log(Number(Num) / Number(Num) * Number(Num) + Number(Num)); // 20

// Solution Four
console.log(Number(Num) * Number(Num) / Number(Num) + Number(Num)); // 20

// ================== assignment 4=======

let points = 10;

// Write Your Code Here

console.log(++points + +true + +true); // 13

// Write Your Code Here

console.log(--points - +true - +true ); // 8;

//===========challenge 1

let a = 10;
let b = "20";
let c = 80;
                                      
console.log(++a + +b++ +c++ - +a++);  
console.log(++a + -b + +c++ - -a++ + +a);  
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/**
 * [++a]
 * -value:11
 * explain: pre incremented  and printed
 *  [+]
 * -value:+ arithmetic operator
 * explain: because it's between 2  numbers a and +b
 *  [+b++]
 * -value: 21 but printed 20
 * explain: with + unary operator type-coercion is made and  now it's a number  and it's post incremented it's incremented but not printed 
 * [+]
 * value:is an arithmetic operator
 * explain:it's in the middle of 2 numbers +b and c 
 * [c++]
 * -value: 81 but printed 80
 * explain: and it's post incremented but it didn't printed 
 * [-]
 * -value : - arithmetic operator
 * explain : it's between 2 numbers c and +a
 * [+a++]
 * value:12 but printed 11
 * explain:  with + unary operator it return the value of a which is 11 and it's post incremented  it will be printed as 11 
 * 
 * [total is 100]
*/
//==================================================
                                          

/**
 * [++a]
 * value: 13
 * explain: because it has been increment 3 times 2 in the first example from 10 to 12 and now it's pre incremented 13
 * [+]
 *  -value:+ arithmetic operator
 * - explain : because it is between 2 numbers a and +b
 * [-b]
 * value: now b is -21 
 * explain:because it has been incremented before in first example 
 * [+c++]
 * value: 82 but printed 81
 * explain: because it has been incremented before it's real value is 82 but it won't be printed because it is a post increment 
 * [-]
 *  -value:+ arithmetic operator
 * - explain : because it is between 2 numbers c and +a
 * [-a++]
 * value: -14 but printed -13
 * explain: because post increment it will be printed as last value 13 
 * [+]
 * -value:+ arithmetic operator
 * - explain : because it is between 2 numbers a and +a
 * [+a]
 * value: now it's 14 
 * explain: because it has been incremented twice [per & post]in this example so it's final value is 14 
 *  [total is 100]
 */                                                        
 /**
  * [--c]
  * value : 81
  * explain: because it has been pre decremented. and last value of it was 82
  *  [+]
 *  -value:+ arithmetic operator
 * - explain : because it is between 2 numbers c and +b
 * [+b]
 * value 21:
 * explain: from last example it is 21  now it's printed as it is 
 * 
   [+]
 *  -value:+ arithmetic operator
 * - explain : because it is between 2 numbers b and a
 * [--a]
 * value: 13
 * explain: from last example it is 14  but now it has been pre decremented
 * [*]
 * -value:+ arithmetic operator
 * - explain : because it is between 2 numbers a and +b
 * [=b++]
 * value: 21
 * explain: real value is 22. but because it is post increment it will bw printed as 21
 * [-]
 *  -value:+ arithmetic operator
 * - explain : because it is between 2 numbers +b and +b
 * [-b]
 * value:-22
 * explain: it has value of 22 from the last step and negative because of the unary operator
 * [*]
 * -value:+ arithmetic operator
 * - explain : because it is between 2 numbers +b and a
 * [a]
 * value:13
 * explain:printed as it is from last step
 * [+]
 * value:+ arithmetic operator
 * - explain : because it is between 2 numbers a and a
 * [--a]
 * value: 12
 * explain: here is pre decrement to it so it will be printed as 12 
 * [-]
 * 
 * -value:+ arithmetic operator
 * - explain : because it is between 2 numbers a and +true  +true here means 1
 * [+ture]
 * value:1
 * explain: with unary operator + will return the value of true which is 1 
 * 
 * 
  * 
  */
//===========challenge 2
let d = "-100";
let e = "20";
let f = "30";
let g = true;

// only use variables value
// do not use variable twice
console.log(-d * +e); //2000
console.log(-d + ++g * ++e + ++f  ) //173
