const fs = require("fs");
const path = require("path");
const { getTotalFuelCount, getTotalFinalFuelCount } = require("./helper");

// read the input file
const inputStr = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
// convert input string into array
const inputArr = inputStr
  .trim()
  .split("\n")
  .map(e => parseInt(e));

exports.dayOnePartOne = () => {
  const fuel = getTotalFuelCount(inputArr);
  return `The sum of the fuel requirements for all of the modules on the spacecraft is: ${fuel}`;
};

exports.dayOnePartTwo = () => {
  const fuel = getTotalFinalFuelCount(inputArr);
  return `The sum of the fuel requirements for all of the modules on the spacecraft when also taking into account the mass of the added fuel is: ${fuel}`;
};
