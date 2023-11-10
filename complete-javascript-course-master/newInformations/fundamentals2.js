// Activating Strict Mode
"use strict";
/**
 * strict mod leads to more secure code . it makes it easier for us developers to avoid accidental errors
 
 * that's because of 2 reasons:
 * 1: strict mode forbids us to do certain things 
 * 2: it will actually create visible errors for us in certain situations in which without strict mode javascript will simply fail silently without letting us know that we did  a mistake 
 
 * this statement has to be the very first statement in the script, if we have any code before it it won't be activated
 
 * we also can activate strict mod only for specific functions or specific block,, but it it not the common use. so always use strict at the beginning of the file
 */

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

/**================================= */
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

/**  what's the difference between two of them ?
  
 * function declaration can be called before define it
 *  const age1 = calcAge1(1991);
    function calcAge1(birthYeah) {
    return 2037 - birthYeah;
    }
    but if do that to function expression it will be Error "cannot access age2 before initialization "
 */

// arrow function was in ES6 . it's simply special form of function expression that is shorter, and more faster to write

/**============== */

// notice this in calcAge

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());

console.log(jonas.age);

/**================== */
