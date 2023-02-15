// function mixin
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

//here i define the features and assign it to object
// component
const canEat = {
  eat() {
    this.hunger--;
    return `eating!`;
  },
};
const canWalk = {
  walk: function () {
    return `walk`;
  },
};
const canSwim = {
  swim: function () {
    return `swim`;
  },
};
//-------------------- here is the  constructors functions
function Person() {}

function Fish() {}
// assign behaviors to the object's prototype
mixin(Person.prototype, canEat, canWalk, canSwim);
let personOne = new Person();
console.log(personOne.eat());

mixin(Fish.prototype, canEat, canSwim);
let dory = new Fish();
console.log(dory.swim());

//=====================================================
