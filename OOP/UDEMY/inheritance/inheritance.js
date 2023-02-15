//  ** Inheritance => eliminate redundant code
/**
**=> interview question

 ** classical vs prototypical inheritance

 ** [classical]. imagine i have [super || parent] class and [sub  || child] class  child inherit from parent 

 **[prototypical] we don't have classes in javascript we only have objects so => {{{how we can do inheritance using only objects}}}

 **  we can make object[prototype || parent] and store all common method in this object  and then i can link the other object to it

 ** every object has it's constructor[prototype] which gave all behaviours to others [Object, String]

 ** ====>> [[prototypical inheritance]] <<====
 ** ==>> if i have empty object like let x = {} i can still use property i didn't gave it to him[define it]  like x.toString . where it did come from
 ** ==>> when i try to access  property or method  in object   js engine will  look for this property or method in the object itself if he cant find it then he will look at the prototype of that object .if he didn't see it he will look all the way to the root object [Object].. 

 **==>> by the way prototype is normal object in memory 
*/
//* example
function Circle(radius) {
    //== >own members<==// 
    this.radius = radius;

    // remember i can reference  members in another member  own in prototype || prototype in own
    this.move = function() {
        return `${this.draw()} then move`
    }
}
const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);
console.log(Object.getPrototypeOf(c1)) // constructor [Circle] and constructor has it's own prototype => Object


// * ==>> if i have 1000 circle object  so i will  have 1000 copies of that draw method  . i will take massive memory for that
// i will make that function in the prototype of all those object  Circle

//====> prototype  members <<<===
Circle.prototype.draw = function() {
    return `draw`;
}
console.log(c1.draw())
console.log(c1.move());

//* i can modify the implementation of this method  toString in the prototype  [[[DON'T MODIFY OBJECTS YOU DON'T OWN LIKE BUILT IN ONES  TO AVOID BUGS ]]]  THIS ONE IF FOR TESTING ONLY 
console.log(c1.toString())

// Circle.prototype.toString = function () {
//     return 'circle with radius ' +this.radius
// }
// console.log(c1.toString()) 

//* ITERATE OVER REFERENCE MEMBERS AND INSTANCE MEMBER
console.log(Object.keys(c1)) //* Object.keys only return (instance || own) members

for (let key in c1) {
    console.log(key) // * here i will get all members (instance || own) and prototype members 
}

console.log(c1.hasOwnProperty('radius')); // true only check the (instance || own) members
console.log(c1.hasOwnProperty('draw')); // false