const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//console.log(...movements)

// 👉️ The new at Method
//console.log(movements[0]);
//console.log(movements.at(0));

// 👉️ Looping Arrays: forEach

// for (const movement of movements) {
//for (const [i, movement] of movements.entries()) {
//  if (movement > 0) {
//    console.log(`Movement ${i + 1}: You deposited ${movement}`);
//  } else {
//    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//  }
//}
//
//console.log('---- FOREACH ----');
//movements.forEach(function (mov, i, arr) {
//  if (mov > 0) {
//    console.log(`Movement ${i + 1}: You deposited ${mov}`);
//  } else {
//    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//  }
//});

// 👉️ forEach With Maps and Sets

// Map
//const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['GBP', 'Pound sterling'],
//]);
//console.log(currencies)
//console.log(...currencies)
//
//for (const [key,value] of currencies){
//    console.log(key, value)
//}
//console.log('👇️ forEach with Maps')
//currencies.forEach(function (value, key, map) {
//  console.log(`${key}: ${value}`);
//});
//
// Set
//const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
//
//console.log(currenciesUnique);
//console.log(...currenciesUnique)
//
//currenciesUnique.forEach(function (value) {
//  console.log(value);
//});
//for (const item of currenciesUnique){
//    console.log(item)
//}
/*========================*/
// 👉️ The find Method => first item matched

//const jessicaDavisAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(jessicaDavisAccount);
//
//const firstWithdrawal = movements.find(mov => mov < 0);
//
//const firstWithdrawalIndex = movements.findIndex(mov => mov < 0);
//console.log(`firstWithdrawal is ${firstWithdrawal}, and it is in index number ${firstWithdrawalIndex} in movements array `)

// some and every
//console.log(movements);
//
// EQUALITY
//console.log(movements.includes(-130));
//
// SOME: CONDITION
//console.log(movements.some(mov => mov === -130));
//
//const anyDeposits = movements.some(mov => mov > 600);
//console.log(anyDeposits);
//
// EVERY
//console.log(movements.every(mov => mov > 0));

// Separate callback
//const deposit = mov => mov > 0;
//
//console.log(movements.some(deposit));
//console.log(movements.every(deposit));
//console.log(movements.filter(dummy));

// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap;
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

const overallBalance3 = accounts
  .map((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3);

// Sorting Arrays

// Strings
//const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
//console.log(owners.sort());
//console.log(owners);

// Numbers
//console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
//movements.sort((a, b) => a - b);
//console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
//movements.sort((a, b) => b - a);
//console.log(movements);
