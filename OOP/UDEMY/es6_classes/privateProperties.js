// ABSTRACTION   private property ways 


//* symbol
const _radius = Symbol(); // every time i call this function i have unique identifier  Symbol() === Symbol() => false coz it return unique 
const _draw = Symbol();
class Circle {
    constructor(radius) {
            this[_radius] = radius; // private property

        }
        [_draw]() { // private method 
            return `draw`
        }
}
const x = new Circle(1)
console.log(x)
    //=======================

// *  weakMap
const _color = new WeakMap();
const _move = new WeakMap()
class Square {
    constructor(color) {
        _color.set(this, color); // private property

        _move.set(this, _ => { // private method  // function(){} will return undefined for (this) arrow function NOT
            console.log('square is moving', this) // just for chrome console :)
            return `square is moving ` // for node console :)
        })
    }
    details() {
        return _color.get(this)
    }
    movement() {
        return _move.get(this)();
    }
}
const y = new Square('black')
console.log(y)