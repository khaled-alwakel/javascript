// es6 || es 2015
//* class is syntactic sugar over prototypical inheritance
class Circle {
    constructor(radius) {
        //public property  && public methods
        this.radius = radius;
        this.move = function () {
            return `move`
        }
    }
    //prototypical|| instance  method  [for object instances => new Circle ]
    draw() {
        return `draw`
    }
    // static method  for class itself . [for object instances => class only ]
    static parse(str) {
        const radius = JSON.parse(str).radius; // assume that is valid json object 
        return new Circle(radius)
    }

}
const c = new Circle(1)
console.log(c)

const cx = Circle.parse('{"radius" : 1}');
console.log(cx)
//-----------------------------------------

//* take a look Math object

// if it's not exist in javascript what implementation we will use to create it 
class Math2{
    static myStatic(value) {
        return value
    }
}
Math2.myStatic(2)