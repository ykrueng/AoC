const { getInputArray } = require("../utility");
const { orbitCountChecksums, getMinTransferToSan } = require("./helper");

const orbitMap = getInputArray("day6/input.txt", "\n", "string");

exports.daySixPartOne = () => {
  const checksums = orbitCountChecksums(orbitMap);
  return `The number of password within the range given in the puzzle input that meet the criteria is: ${checksums}`;
};

exports.daySixPartTwo = () => {
  const min = getMinTransferToSan(orbitMap);
  return `The minimum number of orbital transfers required to move from the object YOU are orbiting to the object SAN is orbiting is: ${min}`;
};
