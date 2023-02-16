function Shape(color) {
    this.color = color;
}

Shape.prototype.msg = function() {
    return `hello from Shape`
}

function Circle(radius, color) {
    // we should call shape constructor to inherit color from it 
    Shape.call(this, color);
    this.radius = radius;

}

Circle.prototype.draw = function() {
    return `draw`;
}

//*  helper function 
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); // circle inherit from shape [ when you reset the prototype you must reset the constructor]
    Child.prototype.constructor = Child
}
extend(Circle, Shape);

const shape = new Shape('red'); // new Shape.prototype.constructor(1) .. coz every object has it's constructor which return function which create that object 
const circle = new Circle(1, 'black')
console.log(shape)
console.log(circle)