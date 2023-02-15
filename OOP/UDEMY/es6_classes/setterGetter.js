// * easy way setter and getter 

const _radius = new WeakMap(); 

class Circle {
    constructor(radius) {
        _radius.set(this, radius);  // private property 
    }
    get radius() {
        return _radius.get(this)
    }
    set radius(value) {
        if (value <= 0) {
            throw new Error('invalid radius');

        }
        _radius.set(this,value)
    }
} 
const c = new Circle(1);
c.radius = 2;
console.log(c.radius)
