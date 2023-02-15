
// * make an object 

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

// function way
function getWage(baseSalary, overTime, rate) { 
    return baseSalary+ (overTime * rate)
}
console.log(getWage(333, 2, 2))

// Object 

let  employee={

    baseSalary :baseSalary,
    overTime : overTime,
    rate : rate,
    
    getWage:function() {
        return this.baseSalary+ (this.overTime * this.rate)

    }
}

console.log(employee.getWage());  
//*=.=.=.=.=.=.=.=.=.==..=.=.=.=.=.=.=.=.=.=


// *====>PS 2 ways to make an object 

//* factory  function
function createCircle(radius) {
    return {
    radius, // * .radius:radius syntactic sugar
    draw: function () {
        return "draw from factory function "; 
    }
  }
    
}
const circle = createCircle(1)
console.log(circle.draw())

//* constructor function [this, new]
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        return 'draw from constructor function';
    }
    
}
const another = new Circle(1);

console.log(another.draw()) // *here the [[new operator ]] keyword make empty object and then set [this] to point to that object  and return object from constructor function


//* as Kyle said function are objects. use [circle. || another.] you will see suggestions for their prop & methods


let myLion = {
    name: "simba",
    kind: "lion",
    age: '5 years old',
    home: "africa",
    friends:["Timon", "Bomba", "Kiara"],
    eat: function () {
        return "nom nom nom , wow it's delicious"
    }

}
// loop with  for in loop
for (let property in myLion) {
    if (typeof (myLion[property])!== 'function') {
        console.log(myLion[property])
    }
}
console.log(Object.keys(myLion))
console.log(myLion.eat())

//* search for property wether it's  in particular object or not  
if ('kind' in myLion) {
    console.log('found')
}