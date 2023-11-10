<<<<<<< HEAD
 // Reading Files Using JSON.parse and Invert It To Json file
// var fs = require("fs");
// const dataObj = JSON.parse(fs.readFileSync(`${__dirname}/test.json`));
// console.log(dataObj);
//
// const dataString = JSON.stringify(dataObj);
// console.log(dataString);
 //======================

// for (var i = 0; i < 3; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(`i is ${i}`)
//   }, 5000)
// }
 // Declaring a variable with var in for loop doesn't limit it's scope to just that block of code
 //  Since its existence extends beyond that for loop , when the value is evaluated by the setTimeOut() callback , you get the last value it was set to which is 3
 // same behavior while using let , if you already declare before using it like this ...
// let j;
// for (j = 0; j < 3; j++) {
//   console.log(j);
//   setTimeout(() => {
//     console.log(j);
//   }, 1000)
// }
// // let is block scope , it's different i every time
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }
//

'use strict'


const nissan ={
    name :'NISSAN',

}
const bmw = {
    name :'BMW'
}

 function speedUp(speed){
        return `${this.name} is moving with ${speed} km/h speed `
 }

console.log(speedUp.call(bmw, 120))
console.log(speedUp.call(nissan, 180))




const x = JSON.parse('./test.json')
console.log(x)
=======
const { prototype } = require("events");
var fs = require("fs");
const data = JSON.parse(fs.readFileSync(`${__dirname}/test.json`));
console.log(data);

const dataString = JSON.stringify(data);
console.log(dataString);

class Person {
  constructor(name, age = 30, city) {
    (this.name = name), (this.age = age), (this.city = city);
  }
  speak() {
    return `hello world`;
  }
}

const khaled = new Person("khaled", 40, "egypt");
console.log(khaled);

function Person2(name, city) {
  (this.name = name), (this.city = city);
}
Person2.prototype.speak = () => {
  return `hello world`;
};

const sam = new Person2("sam", "egypt");
console.log(sam);
console.log(sam.speak());


>>>>>>> 6265ca4a6deb5823b594b315585172ed760b3e92
