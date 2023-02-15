/** BENEFITS OF FACTORY PATTERN
 * 
 * The Factory pattern can be especially useful when applied to the following situations:

    1: When our object or component setup involves a high level of complexity.

    2: When we need to easily generate different instances of objects depending on the environment we are in.

    3: When we’re working with many small objects or components that share the same properties.
 */

// simple factory example
function cowFactory(name) {
    return {
        name,
        talk() {
            return `Moo, may name is ${this.name}`
        }
    }
}
let daisy = cowFactory('Daisy');
console.log(daisy.talk())

//=======================================================//
/**
 * it is easy to define private property and methods in factory 
 * by including them outside of the returned object 
 * this keep your implementation details ENCAPSULATED .. so u can only expose 
 * the public interface to ur object 
 * here is an example:
 */
function dogFactory(name) {

    function formalName() {
        return `${name} The Dog`
    }
    return {
        talk() {
            return `woof , may name is ${formalName()}`
        }
    }
}

let max = dogFactory('Max');
console.log(max.talk());
// console.log(max.formalName())


//=====================[ FACTORY WITH COMPOSITION ]==================//

/**
 * 'Prefer composition over inheritance' is an important and popular programming principle, used to assign behaviors to
    objects, as opposed to inheriting many often unneeded behaviors.
 */

// BEHAVIOR FACTORIES
const walker = function(state) {
    return {
        walk() {
            return `${state.name} walked`
        },
        sing() {
            return ` singing`
        }
    }
}

function speaker(state) {
    var noise = state.noise || 'grunt';
    return {
        speak: function() {
            return `${state.name}  says ${noise} `;
        }
    };
};
let mover = (state) => {
    return {
        moveSlowly: function() {
            return `${state.name}   is moving slowly`
        },
        moveQuickly: function() {
            return `${state.name}   is moving quickly`;
        }
    };
};

// OBJECT FACTORIES 
// Version≥ 6

/**
 * function description test test test 
 * @param {string} name 
 * @param {number} age 
 * @returns an object with only necessaries  to  Merge our 'behavior' objects 
 */

var person = function(name, age) {
    var state = {
        name: name,
        age: age,
        noise: 'Hello There'
    };
    return Object.assign({},
        speaker(state),
        mover(state),
        walker(state),

    );
};
var rabbit = function(name, color) {
    var state = {
        name: name,
        color: color
    };
    return Object.assign({}, mover(state));
};

let fred = person('Fred', 42);
console.log(fred.speak())
console.log(fred.moveSlowly())
console.log(fred.sing())
let snowy = rabbit('Snowy', 'white');
console.log(snowy)
console.log(snowy.moveSlowly())
console.log(snowy.moveQuickly());
// console.log(snowy.speak()) // Error