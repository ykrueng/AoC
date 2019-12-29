const { getInputArray } = require("../utility");
const { orbitCountChecksums } = require("./helper");

const orbitMap = getInputArray("day6/input.txt", "\n", "string");

exports.daySixPartOne = () => {
  const checksums = orbitCountChecksums(orbitMap);
  return `The number of password within the range given in the puzzle input that meet the criteria is: ${checksums}`;
};
