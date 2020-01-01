const { getInputArray } = require("../utility");
const { runBOOST } = require("./helper");

const inputArr = getInputArray("day9/input.txt", ",");

exports.dayNinePartOne = input => {
  const output = runBOOST(inputArr, input);
  return `The BOOST keycode that intCode produce is: ${output}`;
};
