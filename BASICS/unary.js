//unrary

//plus[returns number if it's not number]

console.log(+100); //100
console.log(+"100"); //100
console.log(-"100"); //-100

console.log(+"khaled"); //NaN
console.log(+"15.2"); //15.5
console.log(+"0xff"); //255
console.log(+null); //0
console.log(+true); //1
console.log(+false); // 0

// negation [return number if it's not a number + negates it  ]
console.log(-100); // -100
console.log(-"100"); // -100
console.log(-"-100"); //100

console.log(-"khaled"); // NaN
console.log(-"15.2"); //-15.2
console.log(-"0xff"); //-255
console.log(-null); // -0
console.log(-true); // -1
console.log(-false); // -0

console.log(Number("100")); // 100
