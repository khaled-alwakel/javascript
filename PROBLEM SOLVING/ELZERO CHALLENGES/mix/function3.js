//* ===========ASSIGNMENTS FROM 64 TO 70
// ASSIGNMENT 1

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}`;
    }
    function ageWithMessage(zAge) {
      
        return ` Your Age Is ${parseInt(zAge)}`;
    }
    function countryTwoLetters(zCountry) {
     
        return `${zCountry.slice(0,2).toUpperCase()}`
    }
    function fullDetails() {
    
        return `Hello ${namePattern(zName)}., ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}
  
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//*=========================================================
//* ASSIGNMENT 2 
let itsMe = _ => `Iam A Normal Function`;
 
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
  
  
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//*==============================================
//* ASSIGNMENT 3
function checker(zName) {
    return (status) => {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    }; 
}
  
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//*==============================================
//* ASSIGNMENT 4
function specialMix(...data) {
    // Your Code Here
    let result =0;
    for (let i = 0; i < data.length; i++){
        if (typeof (data[i]) === "number") {
            result += data[i];
        } else if (typeof (data[i]) === "string" && Number.isInteger(parseInt(data[i])) === true  ) {
            result += parseInt(data[i]);
        }
    }
    return result || `All Is Strings`;
}
  
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


