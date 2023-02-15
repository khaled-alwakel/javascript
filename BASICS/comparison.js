/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// Compare Value Only
console.log(10 == "10"); // true
console.log(10 != "10"); // false

// Compare Value + Type
console.log(10 === "10"); // false
console.log(10 !== "10"); // true  same value but not the same type
console.log(10 !== 10); // false

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

//===========================================
console.log("logical operator");
/*
  logical  Operators
  
  - != Not
  - && and
  - || or
*/

console.log(true); // true
console.log(!true); // false
console.log(!(10 == "10")); // false

console.log(10 == 10 && 10 > 8 && 10 <= 10); //true

console.log(10 == 10 || 10 > 8 || 10 > 50); //true
//==============================================
console.log("control flow");
/**
 * control flow
 * if
 * else if
 *else
 */
let price = 200;
let discount = false;
let discountAmount = 30;
let country = "syria";
let student = true;

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
    price -= discountAmount +10; // price = price - discountAmount
} else if (country === "syria") {
    price -= discountAmount +20; 
} else {
    price -= discountAmount -20;
}
console.log(price); //100
//======================================
console.log("nested if");

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount

} else if (country === "Egypt") {

    if (student === true) {
        price -= discountAmount + 30; // price = price - discountAmount
        
    } else {
        price -= discountAmount + 10; // price = price - discountAmount

    }
} else if (country === "syria") {
    price -= discountAmount + 20;
    
} else {
    price -= discountAmount -20;
}
console.log(price);
//-================================
console.log("conditional (ternary) operator");

let theName = "mona";
let theGender = "female";
let theAge = 30;
if (theGender == "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}
// condition ? if true :if false
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
//document.write(result);
//document.write(theGender === "Male" ? "Mr" : "Mrs");
document.write(`hello ${result} ${theName}`);

theAge < 20 ?
    console.log(20)
    : theAge > 20 && theAge < 60 ?
        console.log("20 to 60")
        : theAge > 60 ?
            console.log("larger than 60")
            : console.log("unknown");

//============================================

/**
 * logical or ||
 *  Null+ undefined +any falsy value
 * nullish coalescing operator ??
 *  NULL +Undefined
 */

// how to know if value is falsy 
console.log(Boolean(100));//true
console.log(Boolean(-100));//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean("Null"));//false

let thePrice = 0; 
console.log(`the price is ${thePrice || 200}`); // 200
console.log(`the price is ${thePrice ?? 200}`); // 0 don't care about falsy value

let myPrice = null; 
console.log(`the price is ${myPrice || 200}`); // 200
console.log(`the price is ${myPrice ?? 200}`); // 0  
