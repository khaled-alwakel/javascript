// * ABSTRACTION  == hide the details + show the essentials
 
function Circle(radius) {
  
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 }; // * => local variable [private property]
    
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.draw = function () {
        console.log('draw')
        
    };
    Object.defineProperty(this, 'theDefaultLocation', { //* theDefaultLocation is now new property  [read only]
        get: function () { 
            return defaultLocation
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error ('invalid location.')
            }
            defaultLocation = value;
        }
    })
}
const circle = new Circle(10);
console.log(circle.theDefaultLocation);
circle.theDefaultLocation = { x: 3, y: 5 }
console.log(circle.theDefaultLocation)
circle.theDefaultLocation = 1
