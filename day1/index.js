const fs = require("fs");
const path = require("path");
const { getTotalFuelCount } = require("./helper");

// read the input file
const inputStr = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
// convert input string into array
const inputArr = inputStr
  .trim()
  .split("\n")
  .map(e => parseInt(e));

exports.dayOnePartOne = () => {
  return `The sum of the fuel requirements for all of the modules on the spacecraft is: ${getTotalFuelCount(
    inputArr
  )}`;
};
