const { getInputArray } = require("../utility");
const { getPasswordCount } = require("./helper");

const str = getInputArray("day4/input.txt", "-");

exports.dayFourPartOne = () => {
  const passwordCount = getPasswordCount(str[0], str[1]);
  return `The number of password within the range given in the puzzle input that meet the criteria is: ${passwordCount}`;
};

exports.dayFourPartTwo = () => {
  const passwordCount = getPasswordCount(str[0], str[1], true);
  return `The number of password within the range given in your puzzle input that meet all of the criteria: ${passwordCount}`;
};
