/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff); // return milliseconds
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth()); // by index jan is 0 etc
console.log(dateNow.getDay()); // also by index sun is 0
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

