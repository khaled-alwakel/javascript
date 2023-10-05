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


