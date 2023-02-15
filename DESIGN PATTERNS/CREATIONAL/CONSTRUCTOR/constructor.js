// constructor function => function create objects for us
function Person(name) {
    // const this = {}
    this.name = name;
    this.talk = function() {
        return `hello i am ${this.name}`
    };
    // return this

}
const me = new Person('Alice')
console.log(me.talk())

// *here the [[new operator ]] keyword make empty object and then set [this] to point to that object  and return object[this] from constructor function to the statement were was invoked