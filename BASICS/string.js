// string methods
let theName = "ahmed";
let theList = [1, 2, 3, 4, 5];

//access with index

console.log(theName);
console.log(theName[1]);

// access with charAt()
console.log(theName.charAt(1)); //h

console.log(theName.length); //5

console.log(theName.charAt(5)); // return nothing
console.log(theName[5]); //undefined

//trim
let myName = "  ahmed  ";
console.log(myName[1]); // second space
console.log(myName[5]); //e
console.log(myName.length);
console.log(myName.trim());

// to uppercase
console.log(myName.toUpperCase());

// to lowercase
console.log(myName.toLowerCase());

// chain method
console.log(myName.trim().charAt(2).toUpperCase());

//========================================================

// index of (value[mand], start[opt] 0)  // start here to tell him where to start 0 is default

let a = "elzero web school";
console.log(a.indexOf("web")); // 7 print the index of first w
console.log(a.indexOf("web", 8)); // it will start from index 8 he will not see web and will return -1
console.log(a.lastIndexOf("web")); // he will print the last word like web  7

console.log(a.indexOf("o")); // 5 he will print the index of first o
console.log(a.lastIndexOf("o")); // 15 last o in sentence

// slice (start[mand], end,[opt] not include end )
console.log(a.slice(2, 6)); //zero

console.log(a.slice(-5)); //chool
console.log(a.slice(-5, -2)); //cho

// repeat
console.log(a.repeat(4));

// split(separator [opt], limit[opt])
console.log(a.split("")); // return array with every single letter as index
console.log(a.split(" ")); // split the spaces and  return array ['elzero, web, school']
console.log(a.split(" ", 2)); // split the spaces and  return array ['elzero, web']
console.log(a.split("", 2)); // split the spaces and  return array ['e','l]

let b = "elzero|web|school";
console.log(b.split("|")); // split the spaces and  return array ['elzero, web, school']

//===================================================================================

// substring (start[mand], end,[opt] not include end )
console.log(a.substring(2, 6)); //zero
console.log(a.substring(6, 2)); // zero if start > end it will be swapped
console.log(a.substring(-10)); // elzero web school.. [any number less than 0 it will make him start from zero ]
console.log(a.substring(-10, 6)); // elzero 0-6
console.log(a.substring(a.length - 1)); //l last index
console.log(a.substring(a.length - 5, a.length - 3)); // ch

//=======================================================
// substr
console.log(a.substr(0)); // elzero web school
console.log(a.substr(0, 6)); // el starting and how many character you want
console.log(a.substr(18)); // if start > length it will return empty string
console.log(a.substr(-3)); // ool
console.log(a.substr(-5, 2)); // ch start from -5 and just count 2
//==============================================================

// [include(value[mand], start[opt] default 0)]
//[start with(value[mand], start[opt] default 0)]
//[end with(value[mand], start[opt] default full length]
//all returns or and false

console.log(a.includes("web", 5)); //true

console.log(a.startsWith("el")); //true
console.log(a.startsWith("e", 2)); //false

// [here we deal with length no index]
console.log(a.endsWith("l")); //true
console.log(a.endsWith("ro", 6)); //true
