// * MODULARITY =>> HAS A LOT OF BENEFITS [MAINTAINABILITY , REUSABILITY, ABSTRACT]

//* COMMON JS  MODULES

// implementation details
const _radius = new WeakMap(); 
// public interface 
class Circle {
    constructor(radius) {
        _radius.set(this, radius);  // private property
        
    }
    draw() {
        return `circle with radius ${_radius.get(this)}`
    }
}

module.exports= Circle;