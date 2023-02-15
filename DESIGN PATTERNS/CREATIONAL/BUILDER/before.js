/**
 ** BUILDER PATTERN  is useful when you need to  create objects that have many interlinking parts or many optional and required fields
 */
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User(
  "Bob",
  undefined,
  undefined,
  new Address("12345", "Main St.")
);
console.log(user);

// chained methods
class Arithmetic {
  constructor() {
    this.value = 0;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  addition(value) {
    this.value = this.value + value;
    return this;
  }
  subtraction(value) {
    this.value = this.value - value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? this.sum(...args).value / args.length
      : undefined;
    return this;
  }
}

const arithmetic = new Arithmetic();
arithmetic
  .sum(1, 3, 6) // => { value: 10 }
  .subtraction(3) // => { value: 7 }
  .addition(4).value; // => { value: 11 } // => 11
console.log(arithmetic);
