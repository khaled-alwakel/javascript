//* instead of using reset prototype and reset constructor i can use this [extend]
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); // circle inherit from shape [ when you reset the prototype you must reset the constructor]
    Child.prototype.constructor = Circle 
}
function Shape() {
    
}

Shape.prototype.msg = function () {
    return `hello from Shape`
}

function Circle() {
    
};

extend(Circle, Shape);

// * method over write [ the engine will see it first ]
Circle.prototype.msg = function () {
    // return ` ${ Shape.prototype.msg.call(this)} hello from circle`// if i wanna call Shape function here 
    return `hello from circle`
}
 
const c = new Circle;
console.log(c.msg())
