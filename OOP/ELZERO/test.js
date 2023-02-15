/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary() {
        return parseInt(this.#e);
    }
}

class Vip extends User {
    constructor(id, username, eSalary, ability) {
        super(id, username, eSalary);
        this.ability = ability;
    }
}

let userOne = new User(100, "Elzero", "5000 Gneh");
let vipUser = new Vip(101, "khaled", "5555 pounds", "unlimited access");


console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

console.log(vipUser.u);
console.log(vipUser.getSalary());

