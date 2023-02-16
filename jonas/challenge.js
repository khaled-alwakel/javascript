// create a linked list
const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2)
    return `Dolphins wins(${avgDolphins} vs ${avgKoalas})`;
  else if (avgKoalas >= avgDolphins * 2)
    return `Koalas wins(${avgKoalas} vs ${avgDolphins})`;
  else return ` No Team Wins .... `;
};

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(23, 11));

/**==================== */
