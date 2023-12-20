// // Challenge 1 & 2
//
// //Mark and John are trying to compare their BMI (Body Mass Index)
// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;
//
// const markBmi = Math.round(markMass / markHeight ** 2);
// const johnBmi = Math.round(johnMass / (johnHeight * johnHeight));
//
// const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);
//
// if (markBmi > johnBmi) {
//   console.log(`Mark BMI (${markBmi}) is higher than john's (${johnBmi})! `);
// } else {
//   console.log(`john's BMI (${johnBmi}) is higher than mark's (${markBmi})! `);
// }
// /**======================= */
// // Challenge 3
//
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// const minimumScore = 100;
//
// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore)
//   console.log("Dolphins Wins the  🏆 !");
// else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimumScore)
//   console.log("Koalas Wins the  🏆 !");
// else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= minimumScore &&
//   scoreKoalas >= minimumScore
// )
//   console.log("Draw 😐");
// else console.log("No Winner 😢");
// /**========================== */
// // if bill 50 300 => 15% or 20%
//
// const bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//
// console.log(
//   `The Bill was ${bill}, The Tip was ${tip}, And The Total Value ${bill + tip}`
// );
//
// /**================= */
//
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//
// console.log(calcTip(100));
//
// const bills = [125, 555, 44];
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
//
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log(totals);
//
// /**===================== */
// const Car = function (manufacturer, speed) {
//   this.manufacturer = manufacturer;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return `${this.manufacturer} is going at ${this.speed} km/h`;
// };
// Car.prototype.break = function () {
//   this.speed -= 5;
//   return `${this.manufacturer} is going at ${this.speed} km/h`;
// };
//
// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);
//
// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car1.break());
//
// /**==================== */
//
// class CarCl {
//   constructor(manufacturer, speed) {
//     this.manufacturer = manufacturer;
//     this.speed = speed;
//   }
//
//   accelerate() {
//     this.speed += 10;
//   }
//
//   break() {
//     this.speed -= 5;
//   }
//
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }
//
// const ford = new CarCl("Ford", 120);
//
// ford.speedUS = 252;
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.speedUS = 50;
// console.log(ford);
// /**====================== */
//
// // Coding Challenge #3
// function EV(manufacturer, speed, charge) {
//   Car.call(this, manufacturer, speed);
//   this.charge = charge;
// }
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
//
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   return `${this.manufacturer} going at ${this.speed} km/h with a charge of ${this.charge}%`;
// };
//
// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeBattery(90);
//
// console.log(tesla.accelerate());
//
///**----------------------------- */
// ds-operators Coding Challenge #1
//const game = {
//  team1: "Bayern Munich",
//  team2: "Borrussia Dortmund",
//  players: [
//    [
//      "Neuer",
//      "Pavard",
//      "Martinez",
//      "Alaba",
//      "Davies",
//      "Kimmich",
//      "Goretzka",
//      "Coman",
//      "Muller",
//      "Gnarby",
//      "Lewandowski",
//    ],
//    [
//      "Burki",
//      "Schulz",
//      "Hummels",
//      "Akanji",
//      "Hakimi",
//      "Weigl",
//      "Witsel",
//      "Hazard",
//      "Brandt",
//      "Sancho",
//      "Gotze",
//    ],
//  ],
//  score: "4:0",
//  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//
//  date: "Nov 9th, 2037",
//  odds: {
//    team1: 1.33,
//    x: 3.25,
//    team2: 6.5,
//  },
//};
//
//const [playerOne, playerTwo] = game.players;
//console.log(playerOne, playerTwo);
//
//const [gk, ...fieldPlayers] = playerOne;
//console.log(gk, fieldPlayers);
//
//const allPlayers = [...playerOne, ...playerTwo];
//console.log(allPlayers);
//
//const players1Final = [...playerOne, "Thiago", "Coutinho", "Perisic"];
//
//const {
//  odds: { team1, team2, x: draw },
//} = game;
//console.log(team1, team2, draw);
//
//function printGoals(...players) {
//  console.log(...players);
//  console.log(`${players.length} goals were scored`);
//}
//printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
//
//printGoals(...game.scored);
//
//team1 < team2 && console.log("Team 1 is more likely to win");
//team1 > team2 && console.log("Team 2 is more likely to win");
//
// ds-operators Coding Challenge #2
//
// 1)
//for (const [i, player] of game.scored.entries()) {
//  console.log(`Goal ${i + 1} ${player}`);
//}
//
// 2)
//const odds = Object.values(game.odds);
//let oddsSum = 0;
//for (const odd of odds) oddsSum += odd;
//
//let average = oddsSum / odds.length;
//console.log(average);
//
// 3)
//const gameResultOdds = Object.entries(game.odds);
//console.log(gameResultOdds);
//for (const [team, odd] of gameResultOdds) {
//  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//  console.log(`Odd Of ${teamStr} : ${odd}`);
//}
//
//const scorers = {};
//for (const player of game.scored) {
//  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//}
//console.log(scorers);
//
// ds-operators Coding Challenge #2
//const gameEvents = new Map([
//  [17, "⚽ GOAL"],
//  [36, "🔁 Substitution"],
//  [47, "⚽ GOAL"],
//  [61, "🔁 Substitution"],
//  [64, "🔶 Yellow card"],
//  [69, "🔴 Red card"],
//  [70, "🔁 Substitution"],
//  [72, "🔁 Substitution"],
//  [76, "⚽ GOAL"],
//  [80, "⚽ GOAL"],
//  [92, "🔶 Yellow card"],
//]);
//
// 1)
//const events = [...new Set(gameEvents.values())];
//console.log(events);
//
// 2)
//gameEvents.delete(64);
//console.log(gameEvents);
//
// 3)
//time = [...gameEvents.keys()].pop();
//console.log(
//  `An event happened, on average, every ${time / gameEvents.size} minutes`
//);
//
// 4)
//for (const [minute, event] of gameEvents) {
//  const half = minute <= 45 ? "First" : "SECOND";
//  console.log(`[${half} HALF] ${minute} ${event}`);
//}
//
//

const checkDogs = function (dogsJulia, dogsKate) {
  // 1)
  const dogsJuliaCorrected = dogsJulia; // shallow copy is good practice to NOT mutate the original parameter
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // 2)
  dogs.forEach(function (age, index) {
    age >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${age} years old`
        )
      : console.log("Dog number 2 is still a puppy 🐶");
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// 3)
// const calcAverageHumanAge = function (ages){
//    const humanAges = ages.map(age => age<=2 ? 2*age : 16+age*4)
//    console.log(humanAges)
//    const adults = humanAges.filter(age => age >=18)
//    console.log(adults)
//    const average = adults.reduce ((acc, adultAge) => acc+adultAge)/adults.length
//    console.log(average)
// }

// 4)
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, adultAge) => acc + adultAge) / adults.length;

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

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
