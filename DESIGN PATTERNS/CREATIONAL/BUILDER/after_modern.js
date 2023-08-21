/**
 * Another way of building object can be achieved by simply passing in an object when we create an instance of User. If we pass an object to define the properties of User it then automatically can take care of what to set and what not.
 */
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone = "123-456-7890", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
/**
 * In the above code we are assigning {age,phone,email,address} to = {} in the constructor parameters which means if nothing is passed then pass in an empty object. We can also set default values for object if nothing is set by assigning it like this {age=10,phone,email,address}.
 */
let user = new User("Bob", { age: 40, address: "Egypt" });
console.log(user);
