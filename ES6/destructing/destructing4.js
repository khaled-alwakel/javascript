/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
  };
  
  // console.log(user.theName);
  // console.log(user.theAge);
  // console.log(user.theTitle);
  // console.log(user.theCountry);
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry; 

  //==>look next example if it has been already declared use()
  //* ({ theName, theAge, theTitle, theCountry } = user); 
  
  const { theName, theAge, theCountry } = user; //* if i have no variables has been declared and it's first declare to them 
  
  console.log(theName);
  console.log(theAge);
console.log(theCountry);
  //* here if i want to skip i don't need to use , like array . coz i know what i'm calling theName or theAge etc 