class Shape {
    constructor(color) {
        this.color = color; 
    }
    move() {
        return `move shape 20 steps`
    }
};
class Circle extends Shape{  // circle inherit from shape
    // if i use constructor here i must use the super constructor 
    constructor(color,radius) {
        super(color);
        this.radius = radius; 
    }
   // method over write
    move() {
        console.log(super.move())
        return `move circle 25 steps`
    }
}

const c = new Circle('red', 1);
console.log(c)
console.log(c.move())