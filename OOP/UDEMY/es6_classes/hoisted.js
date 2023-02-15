
//* function hoisting

// function declaration[hoisted]
function sayHello() {
    
}
// function expression [not hoisted]
const x = function () {
    
}; // add ; it's like variable /

//* the different is function declaration is hoisting [ i can call function before i define it ]
sayGoodbye()
function sayGoodbye() {
    
}

// * WHAT ABOUT CLASSES

// CLASS DECLARATION[not hoisted]
class Square {

}
// CLASS EXPRESSION [not hoisted]
const y = class Car{
    
}