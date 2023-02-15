/**
 * The Abstract Factory Pattern is a creational design pattern that can be used to define specific instances or classes
without having to specify the exact object that is being created.
 */
function Car() {
  this.name = "Car";
  this.wheels = 4;
}

function Truck() {
  this.name = "Truck";
  this.wheels = 6;
}

function Bike() {
  this.name = "Bike";
  this.wheels = 2;
}
/**
 *
 */
const vehicleFactory = {
  createVehicle: function (type) {
    switch (type.toLowerCase()) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "bike":
        return new Bike();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("Car");
const truck = vehicleFactory.createVehicle("Truck");
const bike = vehicleFactory.createVehicle("Bike");
const unknown = vehicleFactory.createVehicle("Boat");
console.log(car, truck, bike, unknown);
