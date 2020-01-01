const { getInputArray } = require("../utility");
const { runBOOST } = require("./helper");

const inputArr = getInputArray("day9/input.txt", ",");

exports.dayNinePartOne = () => {
  const output = runBOOST(inputArr, 1);
  return `After running the BOOST program in test boost mode, the coordinates of the distress signal is: ${output}`;
};

exports.dayNinePartTwo = () => {
  const output = runBOOST(inputArr, 2);
  return `After running the BOOST program in sensor boost mode, the coordinates of the distress signal is: ${output}`;
};
