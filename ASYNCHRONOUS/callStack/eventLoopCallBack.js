/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Popped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");

setTimeout(() => {
    console.log("Three");
}, 5000);

setTimeout(() => {
    console.log("Four");
}, 10000);

console.log("Two");

setTimeout(() => { // here it wont be error ocurred because var will be known before the function executed / 
    console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;