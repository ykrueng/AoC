const { getTotalFuelCount, getTotalFinalFuelCount } = require("./helper");
const { getInputArray } = require("../utility");

const arr = getInputArray("day1/input.txt");

exports.dayOnePartOne = () => {
  const fuel = getTotalFuelCount(arr);
  return `The sum of the fuel requirements for all of the modules on the spacecraft is: ${fuel}`;
};

exports.dayOnePartTwo = () => {
  const fuel = getTotalFinalFuelCount(arr);
  return `The sum of the fuel requirements for all of the modules on the spacecraft when also taking into account the mass of the added fuel is: ${fuel}`;
};
