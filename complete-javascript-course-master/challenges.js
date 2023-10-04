// Challenge 1 & 2

//Mark and John are trying to compare their BMI (Body Mass Index)
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBmi = Math.round(markMass / markHeight ** 2);
const johnBmi = Math.round(johnMass / (johnHeight * johnHeight));

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

if (markBmi > johnBmi) {
  console.log(`Mark BMI (${markBmi}) is higher than john's (${johnBmi})! `);
} else {
  console.log(`john's BMI (${johnBmi}) is higher than mark's (${markBmi})! `);
}
/**======================= */
// Challenge 3

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreCoalas = (109 + 95 + 106) / 3;
const minimumScore = 100;

if (scoreDolphins > scoreCoalas && scoreDolphins >= minimumScore)
  console.log("Dolphins Wins the  🏆 !");
else if (scoreDolphins < scoreCoalas && scoreCoalas >= minimumScore)
  console.log("Koalas Wins the  🏆 !");
else if (
  scoreDolphins === scoreCoalas &&
  scoreDolphins >= minimumScore &&
  scoreCoalas >= minimumScore
)
  console.log("Draw 😐");
else console.log("No Winner 😢");
/**========================== */
// if bill 50 300 => 15% or 20%

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The Bill was ${bill}, The Tip was ${tip}, And The Total Value ${bill + tip}`
);

/**================= */

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

/**===================== */
const Car = function (manufacturer, speed) {
  this.manufacturer = manufacturer;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return `${this.manufacturer} is going at ${this.speed} km/h`;
};
Car.prototype.break = function () {
  this.speed -= 5;
  return `${this.manufacturer} is going at ${this.speed} km/h`;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

console.log(car1.accelerate());
console.log(car1.accelerate());
console.log(car1.accelerate());
console.log(car1.accelerate());
console.log(car1.break());

/**==================== */

class CarCl {
  constructor(manufacturer, speed) {
    this.manufacturer = manufacturer;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  break() {
    this.speed -= 5;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl("Ford", 120);

ford.speedUS = 252;
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);
/**====================== */

// Coding Challenge #3
function EV(manufacturer, speed, charge) {
  Car.call(this, manufacturer, speed);
  this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  return `${this.manufacturer} going at ${this.speed} km/h with a charge of ${this.charge}%`;
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);

console.log(tesla.accelerate());

/**----------------------------- */

