/**
 * * CHALLENGE
 */
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {

    let options = [a, b, c];
    let person, age, check;

    for (let i = 0; i < options.length; i++) {

        typeof (options[i]) === "string"
            ? person = options[i]
            : typeof (options[i]) === "number"
                ? age = options[i]
                : check = options[i];
    }
    check === true
        ?console.log(`Hello ${person}, Your Age Is ${age}, You Are Available For Hire`)
        :console.log(`Hello ${person}, Your Age Is ${age}, You Are Not Available For Hire`);
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


