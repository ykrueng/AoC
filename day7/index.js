const { getInputArray } = require("../utility");
const { findMaxThruster } = require("./helper");

const inputArr = getInputArray("day7/input.txt", ",");

exports.daySevenPartOne = () => {
  const maxThruster = findMaxThruster(inputArr);
  return `The highest signal that can be sent to the thrusters is: ${maxThruster}`;
};

exports.daySevenPartTwo = () => {
  const maxThruster = findMaxThruster(inputArr, true);
  return `The highest signal that can be sent to the thrusters is: ${maxThruster}`;
};
