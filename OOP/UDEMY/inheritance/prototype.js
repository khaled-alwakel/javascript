//*every object has it's prototype except the root one
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    return "draw from constructor function";
  };
}
const circle = new Circle(1);
console.log(circle);
console.log(Object.getPrototypeOf(circle)); // constructor [Circle] and constructor has it's own prototype => Object

const leto = 44;
function addTwo() {
  console.log(`there is no ${leto} in the store !`);
}
addTwo();
