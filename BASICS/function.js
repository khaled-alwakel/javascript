function sayHello(userName, age) {
  if (age < 20) {
    console.log("App Is Not Suitable For you");
  } else {
    console.log(`hello ${userName} your age is ${age}`);
  }
}

sayHello("khaled", 31);

//===============================================

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2010, 2022, 2020);
//=================================================
function hello(userName) {
  return `hello ${userName}`;
}

let result = hello("khaled");
console.log(result);
console.log(hello("salma"));
//===================================
function calc(num1, num2) {
  return num1 + num2; // return stop execution what ever after the return
}

console.log(calc(10, 30));
let rslt = calc(30, 40);
console.log(rslt);
console.log(rslt + 100);
//============================================
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return; // stop the function
    }
    console.log(i);
  }
}
generate(10, 20);
//====================================
/**
 * * default function parameters
 * * function parameters  default [undefined]
 * * old strategies [condition + logical or]
 * * es6 method
 */

function greet(userName, age = "unknown") {
  // default value for parameter is undefined
  // if (age === undefined) {
  //     age = "unknown";
  // }
  //age = age || "unknown";
  return `hello ${userName} your age is ${age}`;
}
console.log(greet("alice"));
//=============================================
/**
 * * rest parameters
 * * only one allowed
 * * must be last element
 */
function bla(...numbers) {
  // ...numbers array of arguments[rest parameter]
  //return num1 + num2 + num3;
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `final result is ${result}`;
}
console.log(bla(10, 20, 30, 40, 55)); // if i don't know how many arguments i will use ...numbers to store whatever that number in numbers []

//==================================================================
/*
 *Function Advanced Practice
 * Parameters
 * Default
 * Rest
 * Loop
 * Condition
 */

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");
//================================================
