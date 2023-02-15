//===================== assignments 10-17==================//
//-------- assignments 1
let NumberOne = 10;
let NumberTwo = 20;
console.log("10" + "20"); // Normal Concatenate => 1020
console.log(typeof ("10" + "20")); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`);  // Template Literals Way => String
console.log(NumberOne + "\n" + NumberTwo);  // Normal Concatenate
console.log(`${NumberOne} 
${NumberTwo}`); //template Literals Way

//-------- assignments 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//-------- assignments 3
console.log("`I'm In" +
    "\n" + "\\\\" + "\n" +
    "Love" + "\\\\\ \"\"\"  \'\'\'" +
    "\n" + "++" + "with" + "++" +
    "\n" + "\\ \"\"\"\\\"\"\"" +
    "\n" + "\"\"Javascript\"\"``");

//-------- assignments 4

let x = 21;
let y = 20;

console.log(`_${`${x}_${y}`.repeat(4)}_`); // _21_2021_2021_2021_20_
console.log(`_${x}`.repeat(4));

//===== challenge======//
let PageTitle = "Elzero", Description = "Elzero Web School", Date = "25/10";
let page = `
    <h3> hello${PageTitle}</h3>
    <p>${Description}</p>
    <span>${Date}</span>
`;

document.write(page.repeat(4));
