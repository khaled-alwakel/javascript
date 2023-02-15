/** 
 * * ANONYMOUS FUNCTION
 */  

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

/**
 * * NOTICE 
 * * i can call function before declaration in normal case not anonymous
 * 
 * * console.log(calc(10,20));
 * 
 * * function  calc(num1,num2){
 *  * return num1 + num2;
 * *}
 */
// anonymous
// i can store function in variable 
let calculator = function (num1, num2) { 
  return num1 + num2;
};
  
console.log(calculator(10, 20)); 
  
// function sayHello() {
//     console.log("Hello Osama");
// }
  
// document.getElementById("show").onclick = sayHello;

//anonymous  when i need function once its good to make it anonymous
// document.getElementById("show").onclick = function () {
//   console.log("show");
// };

  
setTimeout(function elzero() { // i can skip elzero it just used to know if there an error
  console.log("Good");
}, 2000);
//====================================================
/**
 * *NESTED FUNCTION
//  */
// function sayHello(fName, lName){
//   let message = "hello";

//   function merge() {
      // here i update the variable
//     message =` ${ message } ${ fName } ${ lName }`;
//   }
//   merge();
//   return message;
// }

// console.log(sayHello("khaled", "alwakel"));

//--------------------
//* example 2
// function sayHello(fName, lName){
//   let message = "hello";

//   function merge() {
    //here i didn't update the variable i just use return
//     return` ${ message } ${ fName } ${ lName }`;
//   }
//   return merge(); // return as a value  from main function
// }

// console.log(sayHello("khaled", "alwakel"));
//========================================================
//* example 3

function sayHello(fName, lName){
  let message = "hello";
  function merge() {
    function getFullName() {
      return `${fName} ${lName}`
    }
    return `${message} ${getFullName()}`; // getfullname as a value
  }
  return merge();
}
console.log(sayHello("khaled", "alwakel"));

//==============================================
//* ARROW FUNCTION


//* normal
// let print = function () {
//   return 10;
// }
// console.log(print());

//* arrow unction
// let print =  () => {
//   return 10;
// }
// console.log(print());

// *  arrow function if u have one line statement remove {} & return
// let print = () => 10; 
// console.log(print());

// *  arrow function if u have one line statement  && [if i have one argument i can remover ()]
// let print = num => num; //
// console.log(print(100));

//*  arrow function if u have one line statement  and don't have any parameters
// let print = _ => 10;
// console.log(print());

//*  arrow function if u have one line statement  and d1 have 2  parameters

let print = (num1, num2) => num1 +num2; // if i have 2 parameters i can't remover ()

console.log(print(100, 50));

//* ANOTHER EXAMPLE
//* Normal Function in JavaScript
// function Welcome(x){
//     console.log(`hello ${x}`);
//   }
// Welcome("khaled");

//   //* Arrow Function
// let Welcome = (x) => {
//     console.log(`hello ${x}`);
// }
// Welcome("salma");
// //* or
// Welcome = (x) => {
//     console.log(`hello ${x}`);
// }
// Welcome("salma");
//--------------------------------------------
/*
  *Scope
  * Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();


//--==========================
//*  SCOPE
//* BLOCK SCOPE [IF | SWITCH | FOR]

var x = 10;
if (10 === 10) {
  let x = 50; // var not block scope
  console.log(`from local ${x}`);
}
console.log(`from global ${x}`);
//=========================================
//*  SCOPE LEXICAL SCOPE
/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    // console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

