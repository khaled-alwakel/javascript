function Welcome(name) {
  this.name = name;
}
Welcome.prototype.sayHello = function () {
  return "Hello, " + this.name + "!";
};
var welcome = new Welcome("John");
console.log(welcome.sayHello());
//===================================

// ===================Prototypal Inheritance======================//

//  ChildObject.prototype = Object.create(ParentObject.prototype);
//  ChildObject.prototype.constructor = ChildObject;

/**
 * If the parent object has values it initializes in its constructor you need to call the parents constructor when
    initializing the child.
    You do that using the following pattern in the ChildObject constructor.
 */
function ChildObject(value) {
  ParentObject.call(this, value);
}
// A complete example where the above is implemented

function RoomService(name, order) {
  // this.name will be set and made available on the scope of this function
  Welcome.call(this, name);
  this.order = order;
}
// Inherit 'sayHello()' methods from 'Welcome' prototype
RoomService.prototype = Object.create(Welcome.prototype);
// By default prototype object has 'constructor' property.
// But as we created new object without this property - we have to set it manually,
// otherwise 'constructor' property will point to 'Welcome' class
RoomService.prototype.constructor = RoomService;

RoomService.prototype.announceDelivery = function () {
  return "Your " + this.order + " has arrived!";
};

RoomService.prototype.deliverOrder = function () {
  return this.sayHello() + " " + this.announceDelivery();
};
var delivery = new RoomService("John", "pizza");
console.log(delivery.sayHello());

console.log(delivery.announceDelivery());
console.log(delivery.deliverOrder());


