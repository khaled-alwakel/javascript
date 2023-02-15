const Person = function(_name, _title) {
    
    const name = _name
    const title = _title
     
    //public
    this.getName = function() {
        return name
    }
 
    //private
    const details = function() {
        return `${name} is a ${title}.`
    }
 
    //public
    this.getDetails = function() {
        return details()
    }
}
 
const person = new Person("Khan", "Web developer");
console.log( person.getName() )
//Khan
 
// person.details();
// TypeError: person.details is not a function
 
console.log( person.getDetails() )
// Khan is a Web developer.