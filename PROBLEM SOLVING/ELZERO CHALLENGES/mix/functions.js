/**
 * * ================== ASSIGNMENTS 57 => 63==========================//
 */

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    console.log(`hello  Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`hello  Mrs ${theName}`);
  }
  else if(theGender === undefined){
    console.log(`hello ${theName}`);
  }
}
  
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
  //==========================================

  function calculate(firstNum, secondNum, operation) {
    // Your Code Here
      if (firstNum === 20 && secondNum === undefined) {
        console.log("Second Number Is Not Found");
      }
      else if (operation === undefined) {
        console.log(firstNum + secondNum);
      } else if (operation === 'add') {
        console.log(firstNum + secondNum);
      }
      else if (operation === 'subtract') {
        console.log(firstNum - secondNum);
      } else if (operation === 'multiply') {
        console.log(firstNum * secondNum);
      }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
  //=================================================
function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    console.log("months is ", theAge * 12);
    console.log("days is", theAge * 12 * 30);
    console.log("hours is", theAge * 12 * 30 * 24);
    console.log("minutes is", theAge * 12 * 30 * 24 *60);
    console.log("seconds is", theAge * 12 * 30 *24 *60 *60);

  } else {
    console.log("Age Out Of Range")
  }
}
  
  // Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
  //=====================================================
  function checkStatus(a, b, c) {
    // Your Code Here
      if (a === false || b === false || c === false) {
          console.log("Hello Osama, Your Age Is 38, You Are Not Available For Hire"); 
      } else {
          console.log("Hello Osama, Your Age Is 38, You Are Available For Hire");
      }
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  //==============================================================================

  function createSelectBox(startYear, endYear) {
    // Your Code Here

        document.write(`<select>`)
            for(let i =startYear; i<=endYear; i++){
                document.write(`<option value="${i}">${i}</option>`);
                
            }
        document.write(`</select>`);
  }
createSelectBox(2000, 2021);
//=============================================
function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        if (typeof (numbers[i]) === "string") {
            continue;
        } else {
            result = result * parseInt(numbers[i]);
        }
        
    }

    console.log(`final result is ${result}`) ;
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//=======================================================

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

  for (let i = 0; i < options.length; i++){
    if (typeof(options[i]) === "string" ) {
      person = options[i];
    }
    else if (typeof(options[i]) === "number") {
      age = options[i] ;
    }
    else if (typeof(options[i]) === "boolean") {
      check = options[i];
    }
}
  if (check === true) {
    console.log(`Hello ${person}, Your Age Is ${age}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${person}, Your Age Is ${age}, You Are Not Available For Hire`);
  }
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"