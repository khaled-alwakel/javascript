/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = 2;

switch (day) {
    default:
        console.log("Unknown Day");
        break;
    case 0:  
        console.log("Saturday");
        break;
    case 1:
    case 2:
        console.log("Sunday");
        break;
  case 3: // must be same type same value of var 
        console.log("Monday");
        break;
}