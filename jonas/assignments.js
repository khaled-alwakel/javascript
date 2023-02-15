// LECTURE: Functions;

// const country = "Egypt";
// const population = 100;
// const capacitalCity = "Cairo";

function describeCountry(country, population, capacitalCity) {
  return ` ${country} has ${population} million people and it's capital city is ${capacitalCity}`;
}

console.log(describeCountry("Egypt", 100, "Cairo"));
console.log(describeCountry("Italy", 150, "Rome"));
console.log(describeCountry("Spain", 90, "Madrid"));

/**=================== */

function percentageOfWorld1(population, value) {
  return (value / population) * 100;
}

const percentageOfWorld2 = function (population, value) {
  return (value / population) * 100;
};

const percentageOfWorld3 = (population, value) => (value / population) * 100;

console.log(percentageOfWorld1(7900, 1441));
console.log(percentageOfWorld2(7900, 1441));
console.log(percentageOfWorld3(7900, 1441));

function describePopulation(country, population) {
  return `${country} has a ${population} million people which is ${percentageOfWorld3(
    7900,
    1441
  )} % of the world `;
}

console.log(describePopulation("China", 1441));
